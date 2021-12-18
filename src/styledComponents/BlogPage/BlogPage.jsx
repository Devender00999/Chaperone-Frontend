import React from "react";
import { BlogPageContainer } from "./BlogPage.styles";
import { HeadingText } from "../common/Common.styles";
import * as Card from "../CareerCard/CareerCard.styles";

const BlogPage = ({ data }) => {
  return (
    <BlogPageContainer>
      {/* <Card.CareerHeader>
        <Card.CareerTitleContainer>
          <Card.CareerTitle>{data.title}</Card.CareerTitle>
          <Card.CareerCompany>{data.companyName}</Card.CareerCompany>
          <Card.CareerTypeContainer>
            <Card.CareerTypeImage
              src={"/images/career-card/home.svg"}
              alt="home"
            />
            <Card.CareerTypeText>{data.type}</Card.CareerTypeText>
          </Card.CareerTypeContainer>
        </Card.CareerTitleContainer>
        <Card.CareerLogo src={data.companyLogo} />
      </Card.CareerHeader> */}
    </BlogPageContainer>
  );
};

export default BlogPage;
