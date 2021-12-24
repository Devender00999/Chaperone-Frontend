import React from "react";
import User from "../../common/User/User";
import { UserDetails, UserProps } from "../../common/User/User.styles";
import Like from "../../common/Like";
import ShareIcon from "@mui/icons-material/Share";
import { BlogText } from "./BlogPage.styles";
import { Heading } from "../../common/Common/Common.styles";
import BlogContainer from "../../BlogContainer/BlogContainer";

const data = {
  blogImg: "/images/blogs/Background.svg",
  blogHeading: "Admission 2020-21 Batch",
  blogText: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quae
  deserunt veritatis blanditiis sunt impedit reiciendis laudantium.
  Blanditiis soluta neque nobis nostrum fugit mollitia excepturi earum
  minus dolores, eligendi perferendis. Lorem ipsum, dolor sit amet
  consectetur adipisicing elit. Impedit et at nemo sequi earum tempore
  illum, odit, vel accusamus aliquid, cumque neque. Magni atque tempore
  voluptas eum assumenda! Porro, voluptates?
  <br/>
  <br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
  quae deserunt veritatis blanditiis sunt impedit reiciendis laudantium.
  Blanditiis soluta neque nobis nostrum fugit mollitia excepturi earum
  minus dolores, eligendi perferendis. Lorem ipsum, dolor sit amet
  consectetur adipisicing elit. Impedit et at nemo sequi earum tempore
  illum, odit, vel accusamus aliquid, cumque neque. \n\n
  Magni atque tempore voluptas eum assumenda! Porro, voluptates? Lorem
  ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ut amet
  illum quia, impedit corporis consectetur officiis molestiae? Ut animi
  eos, repudiandae sunt modi quis inventore aperiam a quod libero! sunt
  modi quis inventore aperiam a quod libero!`,
};

const BlogPage = () => {
  const images = ["/images/blogs/Background.svg"];

  const component = (
    <React.Fragment>
      <Heading style={{ fontSize: "1.25rem", fontWeight: 500 }}>
        {data.blogHeading}
      </Heading>
      <UserDetails>
        <User
          className="secondary-color"
          image="/images/common/user-2.svg"
          name="Deepak Kumar"
        />
        <UserProps>
          <Like className="cursor-pointer" />
          <ShareIcon
            className="cursor-pointer"
            style={{ marginLeft: "0rem" }}
          />
        </UserProps>
      </UserDetails>
      <BlogText dangerouslySetInnerHTML={{ __html: data.blogText }} />
    </React.Fragment>
  );

  return <BlogContainer images={images} component={component} />;
};

export default BlogPage;
