import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import { CardContainer, CardImage } from "../common/Card/Card.styles";

const PGCard = (props) => {
  return (
    <CardContainer>
      <CardImage>
        <Carousel />
      </CardImage>
    </CardContainer>
  );
};

export default PGCard;
