import React, { useEffect } from "react";
import User from "../../common/User/User";
import { UserDetails, UserProps } from "../../common/User/User.styles";
import Like from "../../common/Like";
import ShareIcon from "@mui/icons-material/Share";
import { BlogContent, BlogContainer, BlogText } from "./Blog.styles";
import { Heading, MainContent } from "../../common/Common/Common.styles";
import Carousel from "../../../components/Carousel/Carousel";
import RightSideBar from "../../SidePanel/RightSideBar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../../config";
import { Dropdown, DropdownButton } from "react-bootstrap";
import * as admissionActions from "../../../store/admissions";
import Loader from "../../../components/Loader/Loader";
const AdmissionBlog = () => {
   const dispatch = useDispatch();
   const { id } = useParams();
   const selectedArticle = useSelector(
      (state) => state.admissions.selectedArticle
   );

   const admissionLoading = useSelector((state) => state.admissions.loading);
   useEffect(() => {
      if (id) {
         if (!selectedArticle) dispatch(admissionActions.selectArticle(id));
      }
   }, [dispatch, id, selectedArticle]);
   //   const roadmap = roadmapsData.find((roadmap) => roadmap._id === params.id);

   //   if (!roadmap) window.location.href = "/not-found";
   //   const article = roadmap.articles.find(
   //     (article) => article._id === params.articleId
   //   );
   //   if (!article) window.location.href = "/not-found";

   const data = `${window.location.origin}/dashboard/admission/${id}`;

   const copyToClipboard = async () => {
      try {
         await navigator.clipboard.writeText(data);
      } catch (ex) {
         console.log(ex.message);
      }
   };

   return admissionLoading === true ? (
      <Loader />
   ) : (
      selectedArticle && (
         <>
            <MainContent direction="column" flex={3}>
               <BlogContainer>
                  <Carousel
                     images={[config.url + selectedArticle.image]}
                     height="250px"
                  />
                  <BlogContent>
                     <Heading
                        style={{
                           fontSize: "1.25rem",
                           fontWeight: 500,
                        }}
                     >
                        {selectedArticle.heading}
                     </Heading>
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
      )
   );
};

export default AdmissionBlog;
