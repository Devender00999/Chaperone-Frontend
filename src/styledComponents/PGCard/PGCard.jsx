import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import { PGContainer, PGFeature, PGMapLink } from "./PGCard.styles";
import { DescText, Heading, Price, PrimaryButton } from "../common/Common.styles";
import SchoolIcon from "@mui/icons-material/School";

const PGCard = (props) => {
  return (
    <CardContainer>
      <CardImage style={{ height: "250px" }}>
        <Carousel height="250px" />
      </CardImage>
      <CardData>
        <PGContainer>
          <Heading>Stanza Living Boston House</Heading>
          <Price style={{}}>₹ 18000</Price>
        </PGContainer>
        <PGContainer>
          <DescText style={{ width: "70%" }}>
            D 264 Subhash Nagar, Pandav Nagar Complex, near Subhash Nagar Metro
            Station, Delhi 110092
          </DescText>
          <PGMapLink to="https://maps.google.com">View on map</PGMapLink>
        </PGContainer>
        <PGContainer style={{ justifyContent: "flex-start" }}>
          <PGFeature>
            <SchoolIcon
              style={{
                fontSize: "20px",
                color: "#515151",
                marginRight: "0.5rem",
              }}
            />
            500m from GTBIT
          </PGFeature>

          <PGFeature>
            <SchoolIcon
              style={{
                fontSize: "20px",
                color: "#515151",
                marginRight: "0.5rem",
              }}
            />
            500m from GTBIT
          </PGFeature>
        </PGContainer>
        <PrimaryButton style={{ alignSelf: "flex-end" }}>
          View PG Details
        </PrimaryButton>
      </CardData>
    </CardContainer>
  );
};

export default PGCard;
