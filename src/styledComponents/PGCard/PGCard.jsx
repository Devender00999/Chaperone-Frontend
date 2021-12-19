import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import { PGContainer, PGFeature, PGTag, PGTagText } from "./PGCard.styles";
import {
  DescText,
  Heading,
  Price,
  PrimaryButton,
} from "../common/Common/Common.styles";
import SchoolIcon from "@mui/icons-material/School";
import TrainIcon from "@mui/icons-material/Train";
import { StyledLink } from "../common/Common/Common";

const PGCard = (props) => {
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
          <DescText style={{ width: "70%" }}>{props.data.address}</DescText>
          <StyledLink
            title="View on map"
            image="/images/common/arrow.svg"
            link="/somewhere"
            style={{ flex: "unset" }}
          />
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
            {props.data.distFromCollege}
          </PGFeature>

          <PGFeature>
            <TrainIcon
              style={{
                fontSize: "20px",
                color: "#515151",
                marginRight: "0.5rem",
              }}
            />
            {props.data.distFromMetro}
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
