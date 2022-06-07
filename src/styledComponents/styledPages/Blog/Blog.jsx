import React, { useEffect, useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { BlogContent, BlogContainer, BlogText } from "./Blog.styles";
import config from "../../../config";
import Carousel from "../../../components/Carousel/Carousel";
import { Heading, MainContent } from "../../common/Common/Common.styles";
import Like from "../../common/Like";
import RightSideBar from "../../SidePanel/RightSideBar";
import * as roadmapActions from "../../../store/roadmaps";
import User from "../../common/User/User";
import { UserDetails, UserProps } from "../../common/User/User.styles";

const Blog = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [isApiCalled, setIsApiCalled] = useState(false);

   const selectedArticle = useSelector(
      (state) => state.roadmaps.selectedArticle
   );

   const loading = useSelector((state) => state.roadmaps.loading);
   const error = useSelector((state) => state.roadmaps.error);

   const { id: roadmapId, articleId } = useParams();

   useEffect(() => {
      if (error != null) {
         dispatch(roadmapActions.cleanError());
         navigate("/notFound");
      }
      if (!selectedArticle && !isApiCalled) {
         dispatch(roadmapActions.selectArticle(roadmapId, articleId));
         setIsApiCalled(true);
      }
   }, [
      articleId,
      dispatch,
      error,
      isApiCalled,
      navigate,
      roadmapId,
      selectedArticle,
   ]);

   return loading ? (
      "Loading..."
   ) : selectedArticle ? (
      <>
         <MainContent direction="column" flex={3}>
            <BlogContainer>
               <Carousel
                  images={["/images/blogs/Background.svg"]}
                  height="250px"
               />
               <BlogContent>
                  <Heading style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                     {selectedArticle.heading}
                  </Heading>
                  {selectedArticle.author && (
                     <UserDetails>
                        <User
                           className="secondary-color"
                           image={
                              config.url + selectedArticle.author.profilePic
                           }
                           name={selectedArticle.author.name}
                        />
                        <UserProps>
                           <Like className="cursor-pointer" />
                           <ShareIcon
                              className="cursor-pointer"
                              style={{ marginLeft: "0rem" }}
                           />
                        </UserProps>
                     </UserDetails>
                  )}
                  <BlogText
                     dangerouslySetInnerHTML={{
                        __html: selectedArticle.content,
                     }}
                  />
               </BlogContent>
            </BlogContainer>
         </MainContent>
         <RightSideBar />
      </>
   ) : null;
};

export default Blog;
