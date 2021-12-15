import React from "react";
import * as Card from "./CareerCard.styles";

const CareerCard = () => {
  return (
    <Card.CareerCardContainer>
      <Card.CareerHeader>
        <Card.CareerTitleContainer>
          <Card.CareerTitle>Web Development</Card.CareerTitle>
          <Card.CareerCompany>bon ton</Card.CareerCompany>
          <Card.CareerTypeContainer>
            <Card.CareerTypeImage
              src="/images/career-card/home.svg"
              alt="home"
            />
            <Card.CareerTypeText>Work From Home</Card.CareerTypeText>
          </Card.CareerTypeContainer>
        </Card.CareerTitleContainer>
        <Card.CareerLogo src="/images/career-card/bonton.svg" />
      </Card.CareerHeader>
      <Card.CareerTable>
        <Card.CareerTableRow>
          <Card.CareerTableData>START DATE</Card.CareerTableData>
          <Card.CareerTableData>Immediately</Card.CareerTableData>
        </Card.CareerTableRow>
        <Card.CareerTableRow>
          <Card.CareerTableData>DURATION</Card.CareerTableData>
          <Card.CareerTableData>3 Months</Card.CareerTableData>
        </Card.CareerTableRow>
        <Card.CareerTableRow>
          <Card.CareerTableData>STIPEND</Card.CareerTableData>
          <Card.CareerTableData>$2000/month</Card.CareerTableData>
        </Card.CareerTableRow>
        <Card.CareerTableRow>
          <Card.CareerTableData>APPLY BY</Card.CareerTableData>
          <Card.CareerTableData>23 Nov' 21</Card.CareerTableData>
        </Card.CareerTableRow>
      </Card.CareerTable>
      <Card.CareerCardFooter>
        <Card.CareerFeatureContainer>
          <Card.CareerCardFeature>Internship</Card.CareerCardFeature>
          <Card.CareerCardFeature>Part time allowed</Card.CareerCardFeature>
        </Card.CareerFeatureContainer>
        <Card.CareerCardLink>View Details</Card.CareerCardLink>
      </Card.CareerCardFooter>
    </Card.CareerCardContainer>
  );
};

export default CareerCard;
