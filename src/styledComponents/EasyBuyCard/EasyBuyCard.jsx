import React from "react";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import Carousel from "../../components/Carousel/Carousel";
import {
   Heading,
   Price,
   ItemContainer,
   PrimaryButton,
} from "../common/Common/Common.styles";
import config from "../../config";
import { StyledTags } from "../common/Common/Common";

const EasyBuyCard = (props) => {
   const { small, showTags = null } = props;
   return (
      <CardContainer style={small && { width: "32%" }}>
         <CardImage style={{ height: small ? "180px" : "250px" }}>
            <Carousel
               images={props.data.images.map((image) => config.url + image)}
               height={small ? "180px" : "250px"}
            />
         </CardImage>
         <CardData style={small && { padding: "0.5rem" }}>
            <ItemContainer space="space-between">
               <Heading>{props.data.name}</Heading>
               <Price>₹ {props.data.price}</Price>
            </ItemContainer>
            {showTags && (
               <ItemContainer>
                  <StyledTags
                     color={"#666666"}
                     bColor={"#f6f6f6"}
                     data={props.data.amenities}
                  />
               </ItemContainer>
            )}
            <ItemContainer space="space-between">
               <ItemContainer
                  style={{ alignItems: "flex-start", flexDirection: "column" }}
               >
                  <span>{props.data.ownerName}</span>
                  <span style={{ fontSize: "12px" }}>
                     {props.data.ownerNumber}
                  </span>
               </ItemContainer>
               <a href={"tel:" + props.data.ownerNumber}>
                  <PrimaryButton
                     variant="outlined"
                     href={"tel:" + props.data.ownerNumber}
                  >
                     Call
                  </PrimaryButton>
               </a>
            </ItemContainer>
         </CardData>
      </CardContainer>
   );
};

export default EasyBuyCard;
