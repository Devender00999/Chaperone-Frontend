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
  StyledContainer,
  StyledMain,
} from "../../common/Common/Common.styles";
import Navbar from "../../Navbar/Navbar";
import RightSideBar from "../../SidePanel/RightSideBar";
import SideBar from "../../SidePanel/SideBar";
import { BlogContent, BlogPageContainer } from "../BlogPage/BlogPage.styles";
import { PGContainer, PGFeature } from "../../PGCard/PGCard.styles";
import { StyledLink } from "../../common/Common/Common";
import SchoolIcon from "@mui/icons-material/School";
import TrainIcon from "@mui/icons-material/Train";

const PGPage = (props) => {
  const images = ["/images/blogs/Background.svg"];
  return (
    <StyledContainer>
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Home"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <BlogPageContainer>
              <Carousel
                images={images}
                height="250px"
                bottom="4rem"
                right="1.25rem"
              />

              <BlogContent>
                <PGContainer>
                  <Heading style={{ color: "#ff6600", fontWeight: 500 }}>
                    Stanza Living Boston House
                  </Heading>
                  <Price>₹ 18000 </Price>
                </PGContainer>
                <DescText>
                  D 264 Subhash Nagar, Pandav Nagar Complex, near Subhash Nagar
                  Metro Station, Delhi 110092
                </DescText>
                <PGContainer
                  style={{
                    justifyContent: "flex-end",
                    padding: "0rem 0 0.5rem",
                  }}
                >
                  <StyledLink link="/map" title="View on Map" />
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
                    500m from GTBIT
                  </PGFeature>

                  <PGFeature>
                    <TrainIcon
                      style={{
                        fontSize: "1.25rem",
                        color: "#515151",
                        marginRight: "0.5rem",
                      }}
                    />{" "}
                    800m from Subhash Nagar Metro Station
                  </PGFeature>
                </PGContainer>
                <CommonContainer style={{ justifyContent: "space-between" }}>
                  <ListContainer>
                    <Heading>Amenities</Heading>
                    <List>
                      <ListItem>Wifi</ListItem>
                      <ListItem>Power Backup</ListItem>
                      <ListItem>Room Cleaning</ListItem>
                      <ListItem>Wifi</ListItem>
                    </List>
                  </ListContainer>

                  <ListContainer>
                    <Heading>House Rules</Heading>
                    <List>
                      <ListItem>Wifi</ListItem>
                      <ListItem>Power Backup</ListItem>
                      <ListItem>Room Cleaning</ListItem>
                      <ListItem>Wifi</ListItem>
                    </List>
                  </ListContainer>

                  <ListContainer>
                    <Heading>Other charges</Heading>
                    <List>
                      <ListItem>Rs. 3000 Deposit Amount </ListItem>
                      <ListItem>Laundry</ListItem>
                    </List>
                  </ListContainer>
                </CommonContainer>
              </BlogContent>
            </BlogPageContainer>
          </MainContent>
          <RightSideBar heading="" content={[]} />
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default PGPage;
