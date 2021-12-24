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
  const { small } = props;
  return (
    <CardContainer style={small && { width: "32%" }}>
      <CardImage style={{ height: small ? "180px" : "250px" }}>
        <Carousel
          images={props.data.images}
          height={small ? "180px" : "250px"}
        />
      </CardImage>
      <CardData style={{ padding: small && "1rem" }}>
        <PGContainer>
          <Heading style={small && { width: "70%" }}>{props.data.name}</Heading>
          <Price>₹ {props.data.price}</Price>
        </PGContainer>
        <PGContainer>
          <DescText
            style={{
              width: small ? "unset" : "70%",
              fontSize: small && "0.75rem",
            }}
          >
            {props.data.address}
          </DescText>
          <StyledLink
            title="View on map"
            image="/images/common/arrow.svg"
            link="/somewhere"
            style={{ flex: "unset", display: small && "none" }}
          />
        </PGContainer>
        <PGContainer
          style={{
            justifyContent: "flex-start",
            flexDirection: small && "column",
            alignItems: small && "flex-start",
            rowGap: small && "0.5rem",
            padding: small && "0.5rem 0",
          }}
        >
          <PGFeature style={small && { fontSize: "0.625rem" }}>
            <SchoolIcon
              style={{
                fontSize: small ? "1rem" : "1.25rem",
                color: "#515151",
                marginRight: "0.5rem",
              }}
            />{" "}
            {props.data.distFromCollege}
          </PGFeature>

          <PGFeature style={small && { fontSize: "0.625rem" }}>
            <TrainIcon
              style={{
                fontSize: small ? "1rem" : "1.25rem",
                color: "#515151",
                marginRight: "0.5rem",
              }}
            />{" "}
            {props.data.distFromMetro}
          </PGFeature>
        </PGContainer>
        <PrimaryButton
          style={{ alignSelf: "flex-end", fontSize: small && "0.625rem" }}
        >
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
