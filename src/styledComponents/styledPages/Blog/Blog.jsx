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
import { Dropdown, DropdownButton } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";

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

   const data = `${window.location.origin}/dashboard/roadmaps/${roadmapId}/${articleId}`;

   const copyToClipboard = async () => {
      try {
         await navigator.clipboard.writeText(data);
      } catch (ex) {
         console.log(ex.message);
      }
   };

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
      <Loader />
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
                           <DropdownButton
                              drop={"start"}
                              variant="none"
                              title={<ShareIcon className="cursor-pointer" />}
                           >
                              <Dropdown.Item
                                 className="text-center py-2"
                                 eventKey="1"
                                 href={`http://wa.me/?text=${data}`}
                                 target="_blank"
                              >
                                 Whatsapp
                              </Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item
                                 className="text-center py-2"
                                 eventKey="1"
                                 onClick={() => copyToClipboard()}
                              >
                                 Copy
                              </Dropdown.Item>
                           </DropdownButton>
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
