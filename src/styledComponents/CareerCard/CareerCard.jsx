import React from "react";
import {
  CareerCardContainer,
  CareerTitleContainer,
  CareerHeader,
  CareerTitle,
  CareerCompany,
  CareerLogo,
  CareerTypeContainer,
  CareerTypeImage,
  CareerTypeText,
  CareerTable,
  CareerTableRow,
  CareerTableData,
  CareerTableHeading,
} from "./CareerCard.styles";

const CareerCard = () => {
  return (
    <CareerCardContainer>
      <CareerHeader>
        <CareerTitleContainer>
          <CareerTitle>Web Development</CareerTitle>
          <CareerCompany>bon ton</CareerCompany>
          <CareerTypeContainer>
            <CareerTypeImage src="/images/career-card/home.svg" alt="home" />
            <CareerTypeText>Work From Home</CareerTypeText>
          </CareerTypeContainer>
        </CareerTitleContainer>
        <CareerLogo src="/images/career-card/bonton.svg" />
      </CareerHeader>
      <CareerTable>
        <CareerTableRow>
          <CareerTableHeading>START DATE</CareerTableHeading>
          <CareerTableHeading>DURATION</CareerTableHeading>
          <CareerTableHeading>STIPEND</CareerTableHeading>
          <CareerTableHeading>APPLY BY</CareerTableHeading>
        </CareerTableRow>
        <CareerTableRow>
          <CareerTableData>Immediately</CareerTableData>
          <CareerTableData>3 Months</CareerTableData>
          <CareerTableData>$2000/month</CareerTableData>
          <CareerTableData>23 Nov' 21</CareerTableData>
        </CareerTableRow>
      </CareerTable>
    </CareerCardContainer>
  );
};

export default CareerCard;
