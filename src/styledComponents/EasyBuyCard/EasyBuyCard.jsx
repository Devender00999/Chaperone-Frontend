import React from "react";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import Carousel from "../../components/Carousel/Carousel";
import { PGContainer } from "../PGCard/PGCard.styles";
import User from "../common/User/User";
import { UserDetails } from "../common/User/User.styles";
import {
  DescText,
  Heading,
  Price,
  PrimaryButton,
} from "../common/Common/Common.styles";

const EasyBuyCard = (props) => {
  const { small } = props;
  return (
    <CardContainer style={small && { width: "31%" }}>
      <CardImage style={({ height: "250px" }, small && { height: "180px" })}>
        <Carousel
          images={props.data.images}
          height={small ? "180px" : "250px"}
        />
      </CardImage>
      <CardData style={small && { padding: "1rem" }}>
        <PGContainer>
          <Heading>{props.data.name}</Heading>
          <Price>₹ {props.data.price}</Price>
        </PGContainer>
        <PGContainer>
          <DescText
            style={({ width: "90%" }, small && { fontSize: "0.75rem" })}
          >
            {props.data.about}
          </DescText>
        </PGContainer>
        <UserDetails style={small && { justifyContent: "center" }}>
          <User
            className="secondary-color"
            image="/images/common/user-2.svg"
            name="Deepak Kumar"
            style={small && { display: "none" }}
          />

          <PrimaryButton
            style={
              ({ alignSelf: "flex-end" },
              small && {
                alignSelf: "center",
                fontSize: "0.75rem",
                margin: "0.5rem 0",
              })
            }
          >
            Contact Owner
          </PrimaryButton>
        </UserDetails>
      </CardData>
    </CardContainer>
  );
};

export default EasyBuyCard;
