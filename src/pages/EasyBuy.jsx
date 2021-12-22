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
import { SelectTags } from "../styledComponents/SelectTag/SelectTag.styles";
import SelectTag from "../styledComponents/SelectTag/SelectTag";
import EasyBuyCard from "../styledComponents/EasyBuyCard/EasyBuyCard";

const EasyBuy = (props) => {
  const items = ["Engg. Drawing Board", "Lab Coat", "Drafter", "Sheet Holder"];

  const prices = [500, 1000, 2000];
  const priceRange = prices.map((price) => "< ₹" + price);

  const easyBuyData = [
    {
      name: "Engg. Drawing Board",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit felis ac elit lacinia semper. Vestibulum vulputate lorem elementum vulputate consectetur.",
      images: ["/images/easy-buy/img.svg"],
      price: "250",
    },
    {
      name: "Engg. Drawing Board",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit felis ac elit lacinia semper. Vestibulum vulputate lorem elementum vulputate consectetur.",
      images: ["/images/easy-buy/img.svg"],
      price: "250",
    },
    {
      name: "Engg. Drawing Board",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit felis ac elit lacinia semper. Vestibulum vulputate lorem elementum vulputate consectetur.",
      images: ["/images/easy-buy/img.svg"],
      price: "250",
    },
    {
      name: "Engg. Drawing Board",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit felis ac elit lacinia semper. Vestibulum vulputate lorem elementum vulputate consectetur.",
      images: ["/images/easy-buy/img.svg"],
      price: "250",
    },
  ];
  return (
    <StyledContainer id="container">
      <Navbar />
      <StyledMain className="main">
        <SideBar sideData={props.sideData} title="Easy Buy"></SideBar>
        <Content>
          <MainContent direction="column" flex={3}>
            <PageHeading>Easy Buy</PageHeading>
            <SelectTags>
              <SelectTag
                defaultValue="Select Item"
                options={items}
                selected={true}
              />
              <SelectTag
                defaultValue="Select Price Range"
                options={priceRange}
                selected={false}
              />
            </SelectTags>

            <CommonContainer>
              {easyBuyData.map((item, id) => (
                <EasyBuyCard small key={id} data={item} />
              ))}
            </CommonContainer>
          </MainContent>
        </Content>
      </StyledMain>
    </StyledContainer>
  );
};

export default EasyBuy;
