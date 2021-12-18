import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import {
  PGContainer,
  PGFeature,
  PGMapLink,
  PGTag,
  PGTagText,
} from "./PGCard.styles";
import {
  DescText,
  Heading,
  Price,
  PrimaryButton,
} from "../common/Common.styles";
import SchoolIcon from "@mui/icons-material/School";
import TrainIcon from "@mui/icons-material/Train";

const PGCard = (props) => {
  console.log("pgcard", props.data);
  return (
    <CardContainer>
      <CardImage style={{ height: "250px" }}>
        <Carousel images={props.data.images} height="250px" />
      </CardImage>
      <CardData>
        <PGContainer>
          <Heading>Stanza Living Boston House</Heading>
          <Price>₹ {props.data.price}</Price>
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
            <TrainIcon
              style={{
                fontSize: "20px",
                color: "#515151",
                marginRight: "0.5rem",
              }}
            />
            800m from Subhash Nagar Metro Station
          </PGFeature>
        </PGContainer>
        <PrimaryButton style={{ alignSelf: "flex-end" }}>
          View PG Details
        </PrimaryButton>
      </CardData>
      <PGTag>
        <img
          src={
            props.data.for !== "girls"
              ? "/images/pg-finder/girls.svg"
              : "/images/pg-finder/girls.svg"
          }
          alt={props.data.for}
        />
        <PGTagText>{props.data.for === "girls" ? "Girls" : "Boys"}</PGTagText>
      </PGTag>
    </CardContainer>
  );
};

export default PGCard;
