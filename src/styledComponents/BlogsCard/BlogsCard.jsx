import React from "react";
import { CardContainer, CardData, CardImage } from "../common/Card/Card.styles";
import ShareIcon from "@mui/icons-material/Share";
import Like from "../common/Like";
import User from "../common/User/User";
import { UserDetails, UserProps } from "../common/User/User.styles";
import { DescText, Heading } from "../common/Common/Common.styles";
// import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import { Dropdown, DropdownButton } from "react-bootstrap";
const BlogsCard = (props) => {
  console.log(window.location.href);

  return (
    <CardContainer>
      <CardImage image={props.image} />
      <CardData>
        <Heading>{props.heading}</Heading>
        <DescText>{props.desc}</DescText>
        <UserDetails>
          <User
            className="secondary-color"
            image="/images/common/user-2.svg"
            name="Deepak Kumar"
            style={{ padding: "0.5rem 0" }}
          />
          <UserProps>
            <Like
              id={props.id}
              liked={props.liked}
              className="cursor-pointer"
            />

            {/* <CustomDropdown
              Toggle={
                <ShareIcon
                  className="cursor-pointer"
                  style={{ marginLeft: "1rem" }}
                />
              }
              Menu={Share}
              float={"left"}
              width={50}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            ></CustomDropdown> */}
            <DropdownButton
              drop={"start"}
              variant="none"
              title={<ShareIcon className="cursor-pointer" />}
            >
              <Dropdown.Item className="text-center py-2" eventKey="1">
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
