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
    <CardContainer style={props.small && { width: "35%" }}>
      <CardImage
        style={({ height: "250px" }, props.small && { height: "180px" })}
      >
        <Carousel
          images={props.data.images}
          height={props.small ? "180px" : "250px"}
        />
      </CardImage>
      <CardData style={props.small && { padding: "1.5rem" }}>
        <PGContainer>
          <Heading style={props.small && { width: "70%" }}>
            Stanza Living Boston House
          </Heading>
          <Price>₹ {props.data.price}</Price>
        </PGContainer>
        <PGContainer>
          <DescText
            style={({ width: "70%" }, props.small && { fontSize: "0.75rem" })}
          >
            {props.data.address}
          </DescText>
          <StyledLink
            title="View on map"
            image="/images/common/arrow.svg"
            link="/somewhere"
            style={({ flex: "unset" }, props.small && { display: "none" })}
          />
        </PGContainer>
        <PGContainer
          style={
            ({ justifyContent: "flex-start" },
            props.small && { flexDirection: "column", rowGap: "0.5rem" })
          }
        >
          <PGFeature style={props.small && { fontSize: "0.625rem" }}>
            <SchoolIcon
              style={
                ({
                  fontSize: "20px",
                  color: "#515151",
                  marginRight: "0.5rem",
                },
                props.small && { fontSize: "1rem" })
              }
            />{" "}
            {props.data.distFromCollege}
          </PGFeature>

          <PGFeature style={props.small && { fontSize: "0.625rem" }}>
            <TrainIcon
              style={
                ({
                  fontSize: "20px",
                  color: "#515151",
                  marginRight: "0.5rem",
                },
                props.small && { fontSize: "1rem" })
              }
            />{" "}
            {props.data.distFromMetro}
          </PGFeature>
        </PGContainer>
        <PrimaryButton
          style={
            ({ alignSelf: "flex-end" }, props.small && { fontSize: "0.625rem" })
          }
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
