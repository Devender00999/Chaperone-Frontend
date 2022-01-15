import React, { useState } from "react";

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
import { roadmapsData } from "../../../data/roadmapsData";
import { useParams } from "react-router-dom";

const Roadmap = () => {
   const params = useParams();
   const roadmaps = roadmapsData.find((item) => item._id === params.id);

   if (!roadmaps) window.location.href = "/not-found";

   const rightSideBarData = {
      heading: "Your Recents",
      content: [
         "Choice filling Round 1 for B Tech...",
         "Final Datesheet for Reappear exam",
         "Data Structures Notes",
         "Roadmap to UX Designing",
      ],
   };

   const [showArticles, setShowArticles] = useState(false);
   const articleLimit = showArticles ? roadmaps.articles.length : 4;

   const [showProjects, setShowProjects] = useState(false);
   const projectLimit = showProjects ? roadmaps.projects.length : 2;
   return (
      <>
         <MainContent direction="column" flex={3}>
            <HeadingContainer>
               <PageHeading>{roadmaps.title}</PageHeading>
               <GoBack title="" link="/roadmaps" />
            </HeadingContainer>

            <ArticlesContainer>
               <HeadingContainer style={{ padding: "0.5rem 0" }}>
                  <SecondaryHeading>Featured Articles</SecondaryHeading>
                  <StyledLink
                     title="View All"
                     onClick={() => setShowArticles((prev) => !prev)}
                     link=""
                  />
               </HeadingContainer>

               {roadmaps.articles
                  .slice(0, articleLimit)
                  .map((article, index) => (
                     <Article
                        key={article._id}
                        to={`/dashboard/roadmaps/${roadmaps._id}/${article._id}`}
                     >
                        <ArticleNumber>
                           {index < 10 - 1 ? "0" + (index + 1) : index + 1}
                        </ArticleNumber>
                        <ArticleTextCon>
                           <Heading>{article.heading}</Heading>
                           <DescText>{article.desc.substring(0, 150)}</DescText>
                        </ArticleTextCon>
                     </Article>
                  ))}
            </ArticlesContainer>

            <HeadingContainer>
               <SecondaryHeading>PROJECT IDEAS</SecondaryHeading>
               <StyledLink
                  title="View All"
                  link=""
                  onClick={() => setShowProjects((prev) => !prev)}
               />
            </HeadingContainer>
            <ProjectContainer>
               {roadmaps.projects.slice(0, projectLimit).map((project) => (
                  <ProjectCard small key={project._id} {...project} />
               ))}
            </ProjectContainer>
         </MainContent>
         <RightSideBar {...rightSideBarData} />
      </>
   );
};

export default Roadmap;
