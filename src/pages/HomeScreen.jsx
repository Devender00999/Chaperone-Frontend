import React from "react";
import BlogsCard from "../styledComponents/BlogsCard/BlogsCard";
import {
  Content,
  MainContent,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import Tags from "../styledComponents/Tags/Tags";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import CareerCard from "../styledComponents/CareerCard/CareerCard";
import ProjectCard from "../styledComponents/ProjectCard/ProjectCard";
import PGCard from "../styledComponents/PGCard/PGCard";
import EasyBuyCard from "../styledComponents/EasyBuyCard/EasyBuyCard";
import { blogsData } from "../data/blog";
import { careerData } from "../data/career";
const HomeScreen = (props) => {
  const tags = [
    { value: "All", selected: true },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
  ];

  const pgData = [
    {
      name: "Stanza Living Boston House",
      images: ["/images/pg-finder/pg img.png"],
      address:
        "D 264 Subhash Nagar, Pandav Nagar Complex, near Subhash Nagar Metro Station, Delhi 110099",
      price: "18000",
      location: "https://google.com",
      distFromCollege: "500m from GTBIT",
      distFromMetro: "500m from GTBIT",
      link: "/",
      for: "girls",
    },
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
  return (
    <StyledContainer>
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Home"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <Tags tags={tags} />
            {blogsData.map((blog, id) => (
              <BlogsCard key={id} {...blog} />
            ))}
            {careerData.map((data, id) => (
              <CareerCard key={id} data={data} />
            ))}
            <ProjectCard
              image="/images/projects/Image.svg"
              heading="OurApp - a social media web app in NodeJS"
              desc="Build this full stack application where you will get to learn about building modern, fast and scalable server-side web applications with NodeJS, databases like MongoDB and more."
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
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default HomeScreen;
