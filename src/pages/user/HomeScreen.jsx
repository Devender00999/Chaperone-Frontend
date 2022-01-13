import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogsCard from "../../styledComponents/BlogsCard/BlogsCard";
import { MainContent } from "../../styledComponents/common/Common/Common.styles";

import Tags from "../../styledComponents/Tags/Tags";
import RightSideBar from "../../styledComponents/SidePanel/RightSideBar";
import CareerCard from "../../styledComponents/CareerCard/CareerCard";
import ProjectCard from "../../styledComponents/ProjectCard/ProjectCard";
import PGCard from "../../styledComponents/PGCard/PGCard";
import EasyBuyCard from "../../styledComponents/EasyBuyCard/EasyBuyCard";
import { admissionData } from "../../data/admissionData";
import { careerData } from "../../data/career";
import { pgData } from "../../data/pgFinder";
import { setAdArticles } from "../../redux/actions/admissionActions";
const HomeScreen = (props) => {
  const tags = [
    { value: "All", selected: true },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
  ];

  const easyBuyData = [
    {
      name: "Engg. Drawing Board",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit felis ac elit lacinia semper. Vestibulum vulputate lorem elementum vulputate consectetur.",
      images: ["/images/easy-buy/img.svg"],
      price: "250",
    },
  ];
  const rightSideBarData = {
    heading: "Your Recents",
    content: [
      "Choice filling Round 1 for B Tech...",
      "Final Datesheet for Reappear exam",
      "Data Structures Notes",
      "Roadmap to UX Designing",
    ],
  };

  const allAdArticles = useSelector((state) => state.allAdArticles);
  const dispatch = useDispatch();
  console.log(allAdArticles);

  useEffect(() => {
    dispatch(setAdArticles(admissionData));
  }, [dispatch]);

  return (
    <>
      <MainContent direction="column" flex={3}>
        <Tags tags={tags} />
        {Object.keys(allAdArticles).length === 0
          ? "Loading..."
          : allAdArticles.articles.map((blog, id) => (
              <BlogsCard key={id} {...blog} />
            ))}
        {careerData.map((data, id) => (
          <CareerCard key={id} data={data} />
        ))}
        <ProjectCard
          image="/images/projects/Image.svg"
          heading="OurApp - a social media web app in NodeJS"
          desc="Build this full stack application where you will get to learn about building modern, fast and scalable server-side web applications with NodeJS, databases like MongoDB and more."
          liveLink="/"
          githubLink="/"
        />
        {pgData.map((pg, id) => (
          <PGCard key={id} data={pg} />
        ))}

        {easyBuyData.map((item, id) => (
          <EasyBuyCard key={id} data={item} />
        ))}

        {/* <EasyBuyCard /> */}
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </>
  );
};

export default HomeScreen;
