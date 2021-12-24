import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import {
  BlogContent,
  BlogPageContainer,
} from "../styledPages/BlogPage/BlogPage.styles";

const BlogContainer = (props) => {
  return (
    <BlogPageContainer>
      <Carousel images={props.images} height="250px" />
      <BlogContent>{props.component}</BlogContent>
    </BlogPageContainer>
  );
};

export default BlogContainer;
