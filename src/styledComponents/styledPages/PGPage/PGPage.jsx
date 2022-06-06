import React, { useEffect } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import {
   CommonContainer,
   DescText,
   Heading,
   List,
   ListContainer,
   ListItem,
   MainContent,
   Price,
   OutlinedButton,
} from "../../common/Common/Common.styles";
import RightSideBar from "../../SidePanel/RightSideBar";
import { BlogContent, BlogContainer } from "../Blog/Blog.styles";
import { PGContainer, PGFeature } from "../../PGCard/PGCard.styles";
import { StyledAnchorLink } from "../../common/Common/Common";
import SchoolIcon from "@mui/icons-material/School";
import TrainIcon from "@mui/icons-material/Train";

import config from "../../../config";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import * as findPGActions from "../../../store/findPG";
import Loader from "../../../components/Loader/Loader";

const PGPage = () => {
   const params = useParams();
   const { id } = params;

   const dispatch = useDispatch();

   const pgDetails = useSelector((state) => state.findPG.selectedPGDetails);
   const loading = useSelector((state) => state.findPG.loading);
   const error = useSelector((state) => state.findPG.error);

   useEffect(() => {
      if (id && id !== "new") dispatch(findPGActions.loadPGDetails(id));
   }, [dispatch, id]);

   // Showing errors
   useEffect(() => {
      if (error && loading === false) {
         if (error.message.message) {
            toast.error(error.message.message);
         } else {
            toast.error(error.statusMessage);
         }
      }
   }, [error, loading]);

   return loading ? (
      <Loader />
   ) : pgDetails ? (
      <>
         <MainContent direction="column" flex={3}>
            <BlogContainer>
               <Carousel
                  images={pgDetails.images.map((image) => config.url + image)}
                  height="250px"
                  bottom="4rem"
                  right="1.25rem"
               />

               <BlogContent
                  style={{ boxShadow: "0 0 2px 0px rgb(0 0 0 / 20%)" }}
               >
                  <PGContainer>
                     <Heading style={{ color: "#ff6600", fontWeight: 500 }}>
                        {pgDetails.location}
                     </Heading>
                     <Price>₹ {pgDetails.ratePerMonth} </Price>
                  </PGContainer>
                  <DescText>{pgDetails.address}</DescText>
                  <PGContainer
                     style={{
                        justifyContent: "flex-end",
                        padding: "0rem 0 0.5rem",
                     }}
                  >
                     <StyledAnchorLink
                        link={
                           "https://google.com/maps/search/" +
                           pgDetails.location
                        }
                        title="View on Map"
                     />
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
                        {pgDetails.distanceFromClg + "m from GTBIT"}
                     </PGFeature>

                     <PGFeature>
                        <TrainIcon
                           style={{
                              fontSize: "1.25rem",
                              color: "#515151",
                              marginRight: "0.5rem",
                           }}
                        />{" "}
                        {pgDetails.distanceFromMetro +
                           "m from Mayapuri Metro Station"}
                     </PGFeature>
                  </PGContainer>
                  <CommonContainer style={{ justifyContent: "space-between" }}>
                     <ListContainer>
                        <Heading>Amenities</Heading>
                        <List>
                           {pgDetails.amenities.map((amenity, key) => (
                              <ListItem key={key}>{amenity}</ListItem>
                           ))}
                        </List>
                     </ListContainer>

                     <ListContainer>
                        <Heading>House Rules</Heading>
                        <List>
                           {pgDetails.houseRules.map((houseRule, key) => (
                              <ListItem key={key}>{houseRule}</ListItem>
                           ))}
                        </List>
                     </ListContainer>

                     <ListContainer>
                        <Heading>Other charges</Heading>
                        <List>
                           {pgDetails.otherCharges.map((otherCharge, key) => (
                              <ListItem key={key}>{otherCharge}</ListItem>
                           ))}
                        </List>
                     </ListContainer>
                  </CommonContainer>
                  <CommonContainer>
                     <OutlinedButton
                        variant="outlined"
                        href={"tel:" + pgDetails.ownerNumber}
                        sx={{ alignSelf: "center" }}
                     >
                        Contact: {pgDetails.ownerName}
                     </OutlinedButton>
                  </CommonContainer>
               </BlogContent>
            </BlogContainer>
         </MainContent>
         <RightSideBar />
      </>
   ) : null;
};

export default PGPage;
