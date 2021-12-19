import React from "react";
import {
  Content,
  MainContent,
  PageHeading,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import {
  ServiceContainer,
  ServicesCards,
  ServicesContainer,
} from "../styledComponents/ServiceCard/Service.styles";
import Service from "../styledComponents/ServiceCard/Service";

const Roadmaps = (props) => {
  const services = [
    {
      icon: "/images/services/write-blog.png",
      title: "Write Blog",
      desc: "Users can write blogs on technical topics of their choice or can write on suggested topics and contribute to the community by sharing their knowledge and experience.",
      link: "/",
    },

    {
      icon: "/images/services/notes-pdf.png",
      title: "Download Notes & PYQs",
      desc: "Students can download Notes, Book’s PDFs & PYQs of their resp. branch from the Academics Section. Teachers can also upload Notes to help students in exam preparation.",
      link: "/",
    },

    {
      icon: "/images/services/roadmaps.png",
      title: "Roadmaps",
      desc: "Roadmaps on Chaperone are developed by seniors & alumni which ensures that these technologies can be learned along college curriculum and will help in college projects as well.",
      link: "/",
    },

    {
      icon: "/images/services/career-aware.png",
      title: "Career Aware",
      desc: "Students can view & add Internship & Job opportunities on the portal. If a user follows this section then latest blogs on senior’s interview experience & opportunities postings will be shown in their feed.",
      link: "/",
    },

    {
      icon: "/images/services/doubt-desk.png",
      title: "Doubt Desk",
      desc: "The DoubtDesk section serves as a platform for users to ask & answer questions related to College curriculum, programming & various technologies. ",
      link: "/",
    },

    {
      icon: "/images/services/find-pg.png",
      title: "Find PG",
      desc: "If a user follows this section then all the new added PGs and related information will be shown in their feed.",
      link: "/",
    },
  ];
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Roadmaps"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Roadmaps</PageHeading>
            <ServicesContainer>
              <ServicesCards>
                {services.map((service) => (
                  <Service service={service} />
                ))}
              </ServicesCards>
            </ServicesContainer>
          </MainContent>
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default Roadmaps;
