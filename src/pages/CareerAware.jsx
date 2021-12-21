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
// import {
//   Option,
//   Select,
//   SelectTags,
// } from "../styledComponents/CareerCard/CareerCard.styles";
import CareerCard from "../styledComponents/CareerCard/CareerCard";
import SelectTag from "../styledComponents/SelectTag/SelectTag";
import { SelectTags } from "../styledComponents/SelectTag/SelectTag.styles";

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
      link: "job2",
    },
  ];

  const profileTypes = ["Internship", "Job"];
  const profiles = [
    "Web Developer",
    "Android Developer",
    "Java Developer",
    "Frontend Developer",
    "Backend Developer",
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
              <SelectTag
                selected={true}
                defaultValue="Select Profile Type"
                options={profileTypes}
              />

              <SelectTag
                selected={false}
                defaultValue="Select Profile"
                options={profiles}
              />
            </SelectTags>

            {careerData.map((data, id) => (
              <CareerCard key={id} data={data} />
            ))}
          </MainContent>
          <RightSideBar />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default CareerAware;
