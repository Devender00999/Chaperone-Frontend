import React from "react";
import {
  CommonContainer,
  Content,
  MainContent,
  PageHeading,
  StyledContainer,
  StyledMain,
} from "../styledComponents/common/Common/Common.styles";
import Navbar from "../styledComponents/Navbar/Navbar";
import SideBar from "../styledComponents/SidePanel/SideBar";
import PGCard from "../styledComponents/PGCard/PGCard";
import { SelectTags } from "../styledComponents/SelectTag/SelectTag.styles";
import SelectTag from "../styledComponents/SelectTag/SelectTag";

const FindPG = (props) => {
  const pgData = [
    {
      name: "Stanza Living Boston House",
      images: ["/images/pg-finder/pg img.png"],
      address:
        "D 264 Subhash Nagar, Pandav Nagar Complex, near Subhash Nagar Metro Station, Delhi 110099",
      price: "18000",
      location: "https://google.com",
      distFromCollege: "500m from GTBIT",
      distFromMetro: "800m from Subhash Nagar Metro Station",
      link: "/",
      for: "girls",
    },
    {
      name: "Stanza Living Boston House",
      images: ["/images/pg-finder/pg img.png"],
      address:
        "D 264 Subhash Nagar, Pandav Nagar Complex, near Subhash Nagar Metro Station, Delhi 110099",
      price: "11000",
      location: "https://google.com",
      distFromCollege: "600m from GTBIT",
      distFromMetro: "800m from Mayapuri Metro Station",
      link: "/",
      for: "boys",
    },
    {
      name: "Stanza Living Boston House",
      images: ["/images/pg-finder/pg img.png"],
      address:
        "D 264 Subhash Nagar, Pandav Nagar Complex, near Subhash Nagar Metro Station, Delhi 110099",
      price: "11000",
      location: "https://google.com",
      distFromCollege: "600m from GTBIT",
      distFromMetro: "800m from Subhash Nagar Metro Station",
      link: "/",
      for: "boys",
    },
  ];

  const forWhom = ["Girls", "Boys"];
  const prices = ["15000", 18000, 19000, 25000];
  const priceRange = prices.map((price) => "< " + price);
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Find PG"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Find PG</PageHeading>

            <SelectTags>
              <SelectTag selected options={forWhom} defaultValue="For Whom" />
              <SelectTag
                selected
                options={priceRange}
                defaultValue="Select Price Range"
              />
            </SelectTags>

            <CommonContainer>
              {pgData.map((pg, id) => (
                <PGCard small key={id} data={pg} />
              ))}
            </CommonContainer>
          </MainContent>
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default FindPG;
