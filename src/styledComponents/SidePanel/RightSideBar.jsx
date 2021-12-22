import { RSideBarContainer } from "../common/Common/Common.styles";
import { SideBarHeading, SideBarList, SideBarListItem } from "./SideBar.styles";

const RightSideBar = (props) => {
  return (
    <RSideBarContainer>
      <SideBarHeading>{props.heading}</SideBarHeading>
      <SideBarList>
        {props.content.map((item, id) => (
          <SideBarListItem key={id} to="/doubt-desk/ask-question">
            {item.substring(0, 27) + (+item.length > 27 ? "..." : "")}
          </SideBarListItem>
        ))}
      </SideBarList>
    </RSideBarContainer>
  );
};

export default RightSideBar;
