import React from "react";

import {
  Content,
  MainContent,
  PageHeading,
  PrimaryButton,
  StyledContainer,
  StyledMain,
} from "../../common/Common/Common.styles";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../../SidePanel/SideBar";
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
const BlogPage = (props) => {
  const careerData = {
    role: "Trainee - QA",
    companyName: "bon ton",
    type: "Work from home",
    companyAddress: "GrapeCity Campus, Block A, Noida Sector-62",
    companyLogo: "/images/career-card/bonton.svg",
    startDate: "Immediately",
    duration: "During 6 months Training",
    stipend: 2000,
    ctcOffered: "Rs. 7 LPA",
    lastDate: "23 Nov' 21",
    features: ["Internship", "Part time allowed"],
    link: "https://google.com",
    description: `GrapeCity was founded in Sendai, Japan in the early
    1980s. With headquarters in Japan and offices in the
    US, China, South Korea, India, Russia and many
    more countries, our focus is on helping our
    customers achieve their goals through our software
    products and services.
    Our key principles - thoroughly understanding our
    customers' business objectives, maintaining a strong
    emphasis on quality, and adhering to the highest
    ethical standards.`,
    responsibilities: [
      `Write code samples and build sample applications to help
    developers (existing and potential customers) learn how to
    use our products.`,
      `Assist developers in learning about our newest products
and encourage them to use our beta programs.`,
      `Relay feedback from developers to product managers to
      improve developer products debug code to do cause
      analysis.`,
      `Build internal and open-source code libraries`,
      `Manage and maintain relationships with developers
      (including existing as well as potential customers),
      fostering interest and providing product support to
      developer communities`,
    ],
    requirements: [
      "MCA/M.Sc.IT/B.tech (IT/CS)/M-tech (CS).",
      `Excellent verbal and written communication skills in
    English.`,
      `Strong analytical and logical skills.`,
      `Good troubleshooting and problem-solving attitude.`,
      `Proficiency with programming languages (C/C++/Java/Python
        or C#).`,
    ],
    eligibilityBatch:
      "Batch of 2022 (CS/IT) with min. 7 cgpa & No active Backlogs",
    skillsRequired: [
      "C#.NET,ASP.NET/MVC",
      ".NET Core, Blazor",
      "XAML, Xamarin",
      "JavaScript",
      "Azure, SQL Server",
    ],
    recruitmentProcess: [
      `Online Test (Aptitude, Technical, English) - Duration: 30
    minutes`,
      ` Video assignment: To assess communication skills. The
    candidate will have to submit the assignment within 2~3
    hrs`,
      ` “TrueCall” Testing: To assess how structurally the
    candidate can process the information and their
    creativity. This will be a 1:30 hr video call round. We
    will share the questions at the time of the test`,
      `Interview with HR head`,
      `Technical assignment (Submission to be done in 3 days)`,
      `Workshop - 3 days <br />
      Day 1: Online session for 3 ~ 4 hrs. An assignment will be
      given after the session. <br />
      Day 2 and Day 3: The candidate will have to submit the
      assignment on or before the given date and time.`,
      `Assignment review by the tech team`,
      `4~6 weeks internship`,
      `Discussion with Department head`,
      `Offer`,
    ],
    noOfOpening: "9",
  };
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Career Aware"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Career Aware</PageHeading>
            <CareerPageContainer>
              <CareerHeading>
                {careerData.role} at{" "}
                <CareerCompayHeading>
                  {careerData.companyName}
                </CareerCompayHeading>
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
                  <Card.CareerTableData>
                    {careerData.lastDate}
                  </Card.CareerTableData>
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
                    <CareerExtraInfo>
                      (After Training Completion)
                    </CareerExtraInfo>
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
                      <CareerListItem key={key}>
                        {responsibility}
                      </CareerListItem>
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
          <RightSideBar />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default BlogPage;
