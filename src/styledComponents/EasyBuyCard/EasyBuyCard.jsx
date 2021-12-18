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
} from "../common/Common.styles";

const EasyBuyCard = (props) => {
  return (
    <CardContainer>
      <CardImage style={{ height: "250px" }}>
        <Carousel images={props.data.images} height="250px" />
      </CardImage>
      <CardData>
        <PGContainer>
          <Heading>{props.data.name}</Heading>
          <Price>₹ {props.data.price}</Price>
        </PGContainer>
        <PGContainer>
          <DescText style={{ width: "90%" }}>{props.data.about}</DescText>
        </PGContainer>
        <UserDetails>
          <User
            className="secondary-color"
            image="/images/common/user-2.svg"
            name="Deepak Kumar"
          />

          <PrimaryButton style={{ alignSelf: "flex-end" }}>
            Contact Owner
          </PrimaryButton>
        </UserDetails>
      </CardData>
    </CardContainer>
  );
};

export default EasyBuyCard;
