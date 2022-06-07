import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
   MainContent,
   PageHeading,
   OutlinedButton,
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
import * as careerAwareAction from "../../../store/careeraware";
import Loader from "../../../components/Loader/Loader";

const CareerPage = () => {
   const dispatch = useDispatch();
   const { id } = useParams();
   const [apiCalled, setApiCalled] = useState(false);

   const careerArticle = useSelector(
      (state) => state.careerAware.selectedArticle
   );
   const loading = useSelector((state) => state.careerAware.loading);

   useEffect(() => {
      if (id && !apiCalled) {
         dispatch(careerAwareAction.loadArticle(id));
         setApiCalled(true);
      }
   }, [apiCalled, dispatch, id]);
   console.log(careerArticle);
   return loading ? (
      <Loader />
   ) : (
      careerArticle && (
         <>
            <MainContent direction="column" flex={3}>
               <PageHeading>Career Aware</PageHeading>
               <CareerPageContainer>
                  <CareerHeading>
                     {careerArticle.position} at{" "}
                     <CareerCompayHeading>
                        {careerArticle.companyName}
                     </CareerCompayHeading>
                  </CareerHeading>
                  <CareerAddress>
                     <img
                        src="/images/common/location.svg"
                        style={{ marginRight: "5px" }}
                        alt="location"
                     />
                     {careerArticle.workLocation}
                  </CareerAddress>
                  <Card.CareerTable>
                     <Card.CareerTableRow>
                        <Card.CareerTableData>APPLY BY</Card.CareerTableData>
                        <Card.CareerTableData>
                           {careerArticle.lastApplyDate}
                        </Card.CareerTableData>
                     </Card.CareerTableRow>
                     <Card.CareerTableRow>
                        <Card.CareerTableData>STIPEND</Card.CareerTableData>
                        <Card.CareerTableData>
                           {careerArticle.stipend + "/month"}
                           <CareerExtraInfo>
                              ({careerArticle.duration})
                           </CareerExtraInfo>
                        </Card.CareerTableData>
                     </Card.CareerTableRow>
                     <Card.CareerTableRow>
                        <Card.CareerTableData>CTC</Card.CareerTableData>
                        <Card.CareerTableData>
                           {careerArticle.ctc}
                           <CareerExtraInfo>
                              (After Training Completion)
                           </CareerExtraInfo>
                        </Card.CareerTableData>
                     </Card.CareerTableRow>
                  </Card.CareerTable>

                  <CareerAboutContainer>
                     <CareerAboutHeading>
                        About {careerArticle.companyName}
                     </CareerAboutHeading>
                     <CareerAboutDescription>
                        {careerArticle.aboutCompany}
                     </CareerAboutDescription>
                     <CareerListContainer>
                        <CareerAboutHeading>
                           Key Responsibilities
                        </CareerAboutHeading>
                        <CareerList>
                           {careerArticle.responsibilities.map(
                              (responsibility, key) => (
                                 <CareerListItem key={key}>
                                    {responsibility}
                                 </CareerListItem>
                              )
                           )}
                        </CareerList>
                     </CareerListContainer>
                     <CareerListContainer>
                        <CareerAboutHeading>Requirements</CareerAboutHeading>
                        <CareerList>
                           {careerArticle.requirements.map(
                              (requirement, key) => (
                                 <CareerListItem key={key}>
                                    {requirement}
                                 </CareerListItem>
                              )
                           )}
                        </CareerList>
                     </CareerListContainer>
                     <CareerListContainer>
                        <CareerAboutHeading>Eligibility</CareerAboutHeading>
                        <CareerAboutDescription>
                           {careerArticle.eligibility}
                        </CareerAboutDescription>
                     </CareerListContainer>
                     <CareerListContainer>
                        <CareerAboutHeading>Skills Required</CareerAboutHeading>
                        <CareerList>
                           {careerArticle &&
                              careerArticle.skillRequired.map((skills, key) => (
                                 <CareerListItem key={key}>
                                    {skills}
                                 </CareerListItem>
                              ))}
                        </CareerList>
                     </CareerListContainer>
                     <CareerListContainer>
                        <CareerAboutHeading>
                           Recruitment Process
                        </CareerAboutHeading>
                        <CareerList>
                           {careerArticle.recruitmentProcess.map(
                              (process, key) => (
                                 <CareerListItem key={key}>
                                    {process}
                                 </CareerListItem>
                              )
                           )}
                        </CareerList>
                     </CareerListContainer>
                     <CareerListContainer>
                        <CareerAboutHeading>
                           Number Of Openings
                        </CareerAboutHeading>
                        <CareerAboutDescription>
                           {careerArticle.noOfOpenings}
                        </CareerAboutDescription>
                     </CareerListContainer>
                  </CareerAboutContainer>
                  <OutlinedButton
                     variant="outlined"
                     sx={{ width: "max-content", alignSelf: "center" }}
                     href={careerArticle.link}
                  >
                     Apply Now
                  </OutlinedButton>
               </CareerPageContainer>
            </MainContent>
            <RightSideBar />
         </>
      )
   );
};

export default CareerPage;
