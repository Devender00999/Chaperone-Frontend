import React from "react";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import Like from "../common/Like";
import User from "../common/User/User";
import { UserDetails, UserProps } from "../common/User/User.styles";
import { DescText, Heading } from "../common/Common/Common.styles";
// import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import * as admissionActions from "../../store/admissions";
import { Dropdown, DropdownButton } from "react-bootstrap";
import config from "../../config";
import { useDispatch } from "react-redux";
const BlogsCard = (props) => {
  const dispatch = useDispatch();
  const rTo = "/dashboard/" + props.type + "/" + props._id;
  return (
    <CardContainer>
      <CardImage image={config.url + props.image} />
      <CardData>
        <Link
          style={{ textDecoration: "none" }}
          to={rTo}
          onClick={() => dispatch(admissionActions.selectArticle(props._id))}
        >
          <Heading>{props.heading}</Heading>
          <DescText>{props.description}</DescText>
        </Link>
        <UserDetails>
          <User
            className="secondary-color"
            image={config.url + props.author.profilePic}
            name="Deepak Kumar"
            style={{ padding: "0.5rem 0" }}
          />
          <UserProps>
            <Like
              id={props._id}
              liked={props.liked}
              className="cursor-pointer"
              onClick={(liked) => console.log(props._id, liked)}
            />

            <DropdownButton
              drop={"start"}
              variant="none"
              title={<ShareIcon className="cursor-pointer" />}
            >
              <Dropdown.Item
                className="text-center py-2"
                eventKey="1"
                onClick={() =>
                  console.log(
                    window.location.origin +
                      "/dashboard/" +
                      props.type +
                      "/" +
                      props._id
                  )
                }
              >
                Whatsapp
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className="text-center py-2" eventKey="1">
                Copy
              </Dropdown.Item>
            </DropdownButton>
          </UserProps>
        </UserDetails>
      </CardData>
    </CardContainer>
  );
};

export default BlogsCard;
