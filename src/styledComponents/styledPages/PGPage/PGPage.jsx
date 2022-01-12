import React from "react";
import Carousel from "../../../components/Carousel/Carousel";
import {
  CommonContainer,
  Content,
  DescText,
  Heading,
  List,
  ListContainer,
  ListItem,
  MainContent,
  Price,
} from "../../common/Common/Common.styles";
import RightSideBar from "../../SidePanel/RightSideBar";
import { BlogContent, BlogContainer } from "../Blog/Blog.styles";
import { PGContainer, PGFeature } from "../../PGCard/PGCard.styles";
import { StyledLink } from "../../common/Common/Common";
import SchoolIcon from "@mui/icons-material/School";
import TrainIcon from "@mui/icons-material/Train";

import { pgData } from "../../../data/pgFinder";

const PGPage = (props) => {
  return (
    <Content>
      <MainContent direction="column" flex={3}>
        <BlogContainer>
          <Carousel
            images={pgData[0].images}
            height="250px"
            bottom="4rem"
            right="1.25rem"
          />

          <BlogContent>
            <PGContainer>
              <Heading style={{ color: "#ff6600", fontWeight: 500 }}>
                {pgData[0].name}
              </Heading>
              <Price>₹ {pgData[0].price} </Price>
            </PGContainer>
            <DescText>{pgData[0].address}</DescText>
            <PGContainer
              style={{
                justifyContent: "flex-end",
                padding: "0rem 0 0.5rem",
              }}
            >
              <StyledLink link={pgData[0].location} title="View on Map" />
            </PGContainer>

            <PGContainer
              style={{
                justifyContent: "flex-start",
              }}
            >
              <PGFeature>
                <SchoolIcon
                  style={{
                    fontSize: "1.25rem",
                    color: "#515151",
                    marginRight: "0.5rem",
                  }}
                />{" "}
                {pgData[0].distFromCollege}
              </PGFeature>

              <PGFeature>
                <TrainIcon
                  style={{
                    fontSize: "1.25rem",
                    color: "#515151",
                    marginRight: "0.5rem",
                  }}
                />{" "}
                {pgData[0].distFromMetro}
              </PGFeature>
            </PGContainer>
            <CommonContainer style={{ justifyContent: "space-between" }}>
              <ListContainer>
                <Heading>Amenities</Heading>
                <List>
                  {pgData[0].amenities.map((amenity, key) => (
                    <ListItem key={key}>{amenity}</ListItem>
                  ))}
                </List>
              </ListContainer>

              <ListContainer>
                <Heading>House Rules</Heading>
                <List>
                  {pgData[0].houseRules.map((houseRule, key) => (
                    <ListItem key={key}>{houseRule}</ListItem>
                  ))}
                </List>
              </ListContainer>

              <ListContainer>
                <Heading>Other charges</Heading>
                <List>
                  {pgData[0].otherCharges.map((otherCharge, key) => (
                    <ListItem key={key}>{otherCharge}</ListItem>
                  ))}
                </List>
              </ListContainer>
            </CommonContainer>
          </BlogContent>
        </BlogContainer>
      </MainContent>
      <RightSideBar heading="" content={[]} />
    </Content>
  );
};

export default PGPage;
