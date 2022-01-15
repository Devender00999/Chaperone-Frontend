import { RSideBarContainer } from "../common/Common/Common.styles";
import { SideBarHeading, SideBarList, SideBarListItem } from "./SideBar.styles";

const RightSideBar = (props) => {
  const { heading, content } = props;
  return (
    content && (
      <RSideBarContainer>
        <SideBarHeading>{heading}</SideBarHeading>
        <SideBarList>
          {content.map((item, id) => (
            <SideBarListItem key={id} to="/dashboard/doubt-desk/ask-question">
              {item.substring(0, 27) + (+item.length > 27 ? "..." : "")}
            </SideBarListItem>
          ))}
        </SideBarList>
      </RSideBarContainer>
    )
  );
};

export default RightSideBar;
