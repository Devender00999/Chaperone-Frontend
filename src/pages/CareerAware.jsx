import React from "react";
import {
  Content,
  MainContent,
  StyledContainer,
  StyledMain,
  PageHeading,
} from "../styledComponents/common/Common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import RightSideBar from "../styledComponents/SidePanel/RightSideBar";
import {
  Option,
  Select,
  SelectTags,
} from "../styledComponents/CareerCard/CareerCard.styles";
import CareerCard from "../styledComponents/CareerCard/CareerCard";

const CareerAware = (props) => {
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
      link: "data",
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
      features: [
        "Internship",
        "Part time allowed",
        "Internship",
        "Part time allowed",
      ],
      link: "https://google.com",
    },
  ];
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Career Aware"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Career Aware</PageHeading>
            <SelectTags>
              <Select selected={true}>
                <Option>Internship</Option>
                <Option>Job</Option>
              </Select>
              <Select selected={false}>
                <Option>Job Profile</Option>
                <Option>Web Developer</Option>
                <Option>UI Designer</Option>
              </Select>
            </SelectTags>

            {careerData.map((data) => (
              <CareerCard data={data} />
            ))}
          </MainContent>
          <RightSideBar />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default CareerAware;
