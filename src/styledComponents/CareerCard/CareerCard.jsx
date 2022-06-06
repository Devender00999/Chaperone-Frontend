import React from "react";
import config from "../../config";
import { StyledLink, StyledTags } from "../common/Common/Common";
import * as Card from "./CareerCard.styles";

const CareerCard = ({ data: article }) => {
   return (
      <Card.CareerCardContainer>
         <Card.CareerHeader>
            <Card.CareerTitleContainer>
               <Card.CareerTitle>{article.position}</Card.CareerTitle>
               <Card.CareerCompany>{article.companyName}</Card.CareerCompany>
               <Card.CareerTypeContainer>
                  <Card.CareerTypeImage
                     src={"/images/career-card/home.svg"}
                     alt="Address"
                  />
                  <Card.CareerTypeText>{article.jobType}</Card.CareerTypeText>
               </Card.CareerTypeContainer>
            </Card.CareerTitleContainer>
            <Card.CareerLogo src={config.url + "/" + article.logo} />
         </Card.CareerHeader>
         <Card.CareerTable>
            <Card.CareerTableRow>
               <Card.CareerTableData>START DATE</Card.CareerTableData>
               <Card.CareerTableData>
                  {article.jobStartDate}
               </Card.CareerTableData>
            </Card.CareerTableRow>
            <Card.CareerTableRow>
               <Card.CareerTableData>DURATION</Card.CareerTableData>
               <Card.CareerTableData>
                  {article.duration + " months"}
               </Card.CareerTableData>
            </Card.CareerTableRow>
            <Card.CareerTableRow>
               <Card.CareerTableData>STIPEND</Card.CareerTableData>
               <Card.CareerTableData>
                  {article.stipend + "/month"}
               </Card.CareerTableData>
            </Card.CareerTableRow>
            <Card.CareerTableRow>
               <Card.CareerTableData>APPLY BY</Card.CareerTableData>
               <Card.CareerTableData>
                  {article.lastApplyDate}
               </Card.CareerTableData>
            </Card.CareerTableRow>
         </Card.CareerTable>
         <Card.CareerCardFooter>
            <Card.CareerFeatureContainer>
               <StyledTags
                  color={"#666666"}
                  bColor={"#f6f6f6"}
                  data={article.features.slice(0, 2)}
               ></StyledTags>
            </Card.CareerFeatureContainer>
            <StyledLink
               title="View Details"
               link={`/dashboard/career-aware/${article._id}`}
            />
         </Card.CareerCardFooter>
      </Card.CareerCardContainer>
   );
};

export default CareerCard;
