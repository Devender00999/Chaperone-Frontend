import React from "react";
import BlogsCard from "../styledComponents/BlogsCard/BlogsCard";
import {
  Content,
  MainContent,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import Tags from "../styledComponents/Tags/Tags";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import CareerCard from "../styledComponents/CareerCard/CareerCard";
import ProjectCard from "../styledComponents/ProjectCard/ProjectCard";
import PGCard from "../styledComponents/PGCard/PGCard";

const HomeScreen = (props) => {
  const tags = [
    { value: "All", selected: true },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
    { value: "Interest", selected: false },
  ];

  const blogs = [
    {
      image: "/images/blogs/Image.svg",
      heading: "Complete Roadmap to Web Development 2021",
      desc: "Today there are so many languages and tools and frameworks. Which one should you learn? And for each, there are a ton of courses. Super confusing! We are here to give you full guidance...",
    },
    {
      image: "/images/blogs/Image.svg",
      heading: "Complete Roadmap to Web Development 2021",
      desc: "Today there are so many languages and tools and frameworks. Which one should you learn? And for each, there are a ton of courses. Super confusing! We are here to give you full guidance...",
    },
    {
      image: "/images/blogs/Image.svg",
      heading: "Complete Roadmap to Web Development 2021",
      desc: "Today there are so many languages and tools and frameworks. Which one should you learn? And for each, there are a ton of courses. Super confusing! We are here to give you full guidance...",
    },
    {
      image: "/images/blogs/Image.svg",
      heading: "Complete Roadmap to Web Development 2021",
      desc: "Today there are so many languages and tools and frameworks. Which one should you learn? And for each, there are a ton of courses. Super confusing! We are here to give you full guidance...",
    },
  ];

  const careerData = [
    {
      title: "Web Development",
      companyName: "bon ton",
      type: "Work from home",
      companyLogo: "/images/career-card/bonton.svg",
      startDate: "Immediately",
      duration: "3 Months",
      amount: 2000,
      lastDate: "23 Nov' 21",
      features: ["Internship", "Part time allowed"],
      link: "https://google.com",
    },
    {
      title: "Web Development",
      companyName: "bon ton",
      type: "Work from home",
      companyLogo: "/images/career-card/bonton.svg",
      startDate: "Immediately",
      duration: "3 Months",
      amount: 2000,
      lastDate: "23 Nov' 21",
      features: ["Internship", "Part time allowed"],
      link: "https://google.com",
    },
  ];

  const pgData = [
    {
      name: "Stanza Living Boston House",
      images: [
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
      ],
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
  return (
    <StyledContainer>
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Home"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <Tags tags={tags} />
            {blogs.map((blog) => (
              <BlogsCard {...blog} />
            ))}
            {careerData.map((data) => (
              <CareerCard data={data} />
            ))}
            <ProjectCard
              image="/images/projects/Image.svg"
              heading="OurApp - a social media web app in NodeJS"
              desc="Build this full stack application where you will get to learn about building modern, fast and scalable server-side web applications with NodeJS, databases like MongoDB and more."
            />
            {pgData.map((pg, id) => (
              <PGCard key={id} data={pg} />
            ))}
          </MainContent>
          <RightSideBar />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default HomeScreen;
