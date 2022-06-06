import React, { useEffect, useState } from "react";

import {
   DescText,
   Heading,
   MainContent,
   PageHeading,
   SecondaryHeading,
} from "../../common/Common/Common.styles";

import { GoBack, StyledLink } from "../../common/Common/Common";
import RightSideBar from "../../SidePanel/RightSideBar";
import {
   Article,
   ArticleNumber,
   ArticlesContainer,
   ArticleTextCon,
   HeadingContainer,
   ProjectContainer,
} from "./Roadmap.styles";
import ProjectCard from "../../ProjectCard/ProjectCard";
import * as roadmapActions from "../../../store/roadmaps";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "@mui/material";

const Roadmap = () => {
   const roadmap = useSelector((state) => state.roadmaps.selectedRoadmap);
   const loading = useSelector((state) => state.roadmaps.loading);
   const error = useSelector((state) => state.roadmaps.error);
   const [isApiCalled, setIsApiCalled] = useState(false);
   const dispatch = useDispatch();

   const { id } = useParams();
   const [showArticles, setShowArticles] = useState(false);
   const articleLimit = showArticles ? roadmap.articles.length : 2;
   const navigate = useNavigate();
   const [showProjects, setShowProjects] = useState(false);
   const projectLimit = showProjects ? roadmap.projects.length : 2;

   // if (!roadmaps) window.location.href = "/not-found";

   // const rightSideBarData = {
   //    heading: "Your Recents",
   //    content: [
   //       "Choice filling Round 1 for B Tech...",
   //       "Final Datesheet for Reappear exam",
   //       "Data Structures Notes",
   //       "Roadmap to UX Designing",
   //    ],
   // };

   useEffect(() => {
      if (error !== null) {
         dispatch(roadmapActions.cleanError());
         navigate("/dashboard/roadmaps");
      }

      if (!roadmap && !isApiCalled) {
         dispatch(roadmapActions.selectRoadmap(id));
         setIsApiCalled(true);
      }
   }, [id, isApiCalled, roadmap, error, dispatch, navigate]);

   const handleArticleSelect = (roadmapId, articleId) => {
      console.log(roadmapId, articleId);
      dispatch(roadmapActions.selectArticle(roadmapId, articleId));
   };

   return loading ? (
      "Loading..."
   ) : roadmap ? (
      <>
         <MainContent direction="column" flex={3}>
            <HeadingContainer>
               <PageHeading>{roadmap.title}</PageHeading>
               <GoBack title="" link="/dashboard/roadmaps" />
            </HeadingContainer>
            {roadmap.articles &&
               roadmap.articles.length === 0 &&
               roadmap.projects &&
               roadmap.projects.length === 0 && (
                  <Alert style={{ marginTop: "20px" }} severity="warning">
                     Nothing to see here. We will add content soon.
                  </Alert>
               )}
            {roadmap.articles && roadmap.articles.length > 0 && (
               <ArticlesContainer>
                  <HeadingContainer style={{ padding: "0.5rem 0" }}>
                     <SecondaryHeading>Featured Articles</SecondaryHeading>
                     <StyledLink
                        title="View All"
                        onClick={() => setShowArticles((prev) => !prev)}
                        link=""
                     />
                  </HeadingContainer>

                  {roadmap.articles
                     .slice(0, articleLimit)
                     .map((article, index) => (
                        <Article
                           key={article._id}
                           to={`/dashboard/roadmaps/${roadmap._id}/${article._id}`}
                           onClick={() =>
                              handleArticleSelect(roadmap._id, article._id)
                           }
                        >
                           <ArticleNumber>
                              {index < 10 - 1 ? "0" + (index + 1) : index + 1}
                           </ArticleNumber>
                           <ArticleTextCon>
                              <Heading>{article.heading}</Heading>
                              <DescText>
                                 {article.description.substring(0, 150)}
                              </DescText>
                           </ArticleTextCon>
                        </Article>
                     ))}
               </ArticlesContainer>
            )}
            <br />

            {roadmap.projects && roadmap.projects.length > 0 && (
               <>
                  <HeadingContainer>
                     <SecondaryHeading>PROJECT IDEAS</SecondaryHeading>
                     <StyledLink
                        title="View All"
                        link=""
                        onClick={() => setShowProjects((prev) => !prev)}
                     />
                  </HeadingContainer>

                  <ProjectContainer>
                     {roadmap.projects.slice(0, projectLimit).map((project) => (
                        <ProjectCard small key={project._id} {...project} />
                     ))}
                  </ProjectContainer>
               </>
            )}
         </MainContent>
         <RightSideBar />
      </>
   ) : null;
};

export default Roadmap;
