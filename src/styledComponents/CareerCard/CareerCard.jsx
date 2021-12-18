import React from "react";
import * as Card from "./CareerCard.styles";

const CareerCard = ({ data }) => {
  return (
    <Card.CareerCardContainer>
      <Card.CareerHeader>
        <Card.CareerTitleContainer>
          <Card.CareerTitle>{data.title}</Card.CareerTitle>
          <Card.CareerCompany>{data.companyName}</Card.CareerCompany>
          <Card.CareerTypeContainer>
            <Card.CareerTypeImage
              src={"/images/career-card/home.svg"}
              alt="home"
            />
            <Card.CareerTypeText>{data.type}</Card.CareerTypeText>
          </Card.CareerTypeContainer>
        </Card.CareerTitleContainer>
        <Card.CareerLogo src={data.companyLogo} />
      </Card.CareerHeader>
      <Card.CareerTable>
        <Card.CareerTableRow>
          <Card.CareerTableData>START DATE</Card.CareerTableData>
          <Card.CareerTableData>{data.startDate}</Card.CareerTableData>
        </Card.CareerTableRow>
        <Card.CareerTableRow>
          <Card.CareerTableData>DURATION</Card.CareerTableData>
          <Card.CareerTableData>{data.duration}</Card.CareerTableData>
        </Card.CareerTableRow>
        <Card.CareerTableRow>
          <Card.CareerTableData>STIPEND</Card.CareerTableData>
          <Card.CareerTableData>{data.amount + "/month"}</Card.CareerTableData>
        </Card.CareerTableRow>
        <Card.CareerTableRow>
          <Card.CareerTableData>APPLY BY</Card.CareerTableData>
          <Card.CareerTableData>{data.lastDate}</Card.CareerTableData>
        </Card.CareerTableRow>
      </Card.CareerTable>
      <Card.CareerCardFooter>
        <Card.CareerFeatureContainer>
          {data.features.map((feature) => (
            <Card.CareerCardFeature>{feature}</Card.CareerCardFeature>
          ))}
        </Card.CareerFeatureContainer>
        <Card.CareerCardLink href={data.link}>
          View Details
          <Card.CareerCardLinkImg src="/images/common/arrow.svg" />{" "}
        </Card.CareerCardLink>
      </Card.CareerCardFooter>
    </Card.CareerCardContainer>
  );
};

export default CareerCard;
