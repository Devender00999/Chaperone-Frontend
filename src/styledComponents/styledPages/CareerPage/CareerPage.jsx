import React from "react";

import {
  MainContent,
  PageHeading,
  PrimaryButton,
} from "../../common/Common/Common.styles";
import RightSideBar from "../../SidePanel/RightSideBar";
import {
  CareerAboutContainer,
  CareerAboutHeading,
  CareerAddress,
  CareerCompayHeading,
  CareerExtraInfo,
  CareerAboutDescription,
  CareerHeading,
  CareerPageContainer,
  CareerList,
  CareerListItem,
  CareerListContainer,
} from "./CareerPage.styles";
import * as Card from "../../CareerCard/CareerCard.styles";
import { useParams } from "react-router-dom";
import { careerData as career } from "../../../data/career";
const BlogPage = () => {
  const params = useParams();
  const careerData = career.find((career) => career.id === params.data);
  console.log(params);
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
    <>
      <MainContent direction="column" flex={3}>
        <PageHeading>Career Aware</PageHeading>
        <CareerPageContainer>
          <CareerHeading>
            {careerData.role} at{" "}
            <CareerCompayHeading>{careerData.companyName}</CareerCompayHeading>
          </CareerHeading>
          <CareerAddress>
            <img
              src="/images/common/location.svg"
              style={{ marginRight: "5px" }}
              alt="location"
            />
            {careerData.companyAddress}
          </CareerAddress>
          <Card.CareerTable>
            <Card.CareerTableRow>
              <Card.CareerTableData>APPLY BY</Card.CareerTableData>
              <Card.CareerTableData>{careerData.lastDate}</Card.CareerTableData>
            </Card.CareerTableRow>
            <Card.CareerTableRow>
              <Card.CareerTableData>STIPEND</Card.CareerTableData>
              <Card.CareerTableData>
                {careerData.stipend + "/month"}
                <CareerExtraInfo>({careerData.duration})</CareerExtraInfo>
              </Card.CareerTableData>
            </Card.CareerTableRow>
            <Card.CareerTableRow>
              <Card.CareerTableData>CTC</Card.CareerTableData>
              <Card.CareerTableData>
                {careerData.ctcOffered}
                <CareerExtraInfo>(After Training Completion)</CareerExtraInfo>
              </Card.CareerTableData>
            </Card.CareerTableRow>
          </Card.CareerTable>

          <CareerAboutContainer>
            <CareerAboutHeading>
              About {careerData.companyName}
            </CareerAboutHeading>
            <CareerAboutDescription
              dangerouslySetInnerHTML={{ __html: careerData.description }}
            ></CareerAboutDescription>
            <CareerListContainer>
              <CareerAboutHeading>Key Responsibilities</CareerAboutHeading>
              <CareerList>
                {careerData.responsibilities.map((responsibility, key) => (
                  <CareerListItem key={key}>{responsibility}</CareerListItem>
                ))}
              </CareerList>
            </CareerListContainer>
            <CareerListContainer>
              <CareerAboutHeading>Requirements</CareerAboutHeading>
              <CareerList>
                {careerData.requirements.map((requirement, key) => (
                  <CareerListItem key={key}>{requirement}</CareerListItem>
                ))}
              </CareerList>
            </CareerListContainer>
            <CareerListContainer>
              <CareerAboutHeading>Eligibility</CareerAboutHeading>
              <CareerAboutDescription>
                {careerData.eligibility}
              </CareerAboutDescription>
            </CareerListContainer>
            <CareerListContainer>
              <CareerAboutHeading>Skills Required</CareerAboutHeading>
              <CareerList>
                {careerData.skillsRequired.map((skills, key) => (
                  <CareerListItem key={key}>{skills}</CareerListItem>
                ))}
              </CareerList>
            </CareerListContainer>
            <CareerListContainer>
              <CareerAboutHeading>Recruitment Process</CareerAboutHeading>
              <CareerList>
                {careerData.recruitmentProcess.map((process, key) => (
                  <CareerListItem key={key}>{process}</CareerListItem>
                ))}
              </CareerList>
            </CareerListContainer>
            <CareerListContainer>
              <CareerAboutHeading>Number Of Openings</CareerAboutHeading>
              <CareerAboutDescription>
                {careerData.noOfOpening}
              </CareerAboutDescription>
            </CareerListContainer>
          </CareerAboutContainer>
          <PrimaryButton>Apply Now</PrimaryButton>
        </CareerPageContainer>
      </MainContent>
      <RightSideBar {...rightSideBarData} />
    </>
  );
};

export default BlogPage;
