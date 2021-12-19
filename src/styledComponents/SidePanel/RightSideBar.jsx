import { RSideBarContainer } from "../common/Common/Common.styles";
import { SideBarHeading, SideBarList, SideBarListItem } from "./SideBar.styles";

const sideBarHeading = {
  heading: "Your Heading",
  content: [
    "Choice filling Round 1 for B Tech...",
    "Final Datesheet for Reappear exam",
    "Data Structures Notes",
    "Roadmap to UX Designing",
  ],
};
const RightSideBar = () => {
  return (
    <RSideBarContainer>
      <SideBarHeading>Your Recents</SideBarHeading>
      <SideBarList>
        {sideBarHeading.content.map((item, id) => (
          <SideBarListItem key={id} to="">
            {item.substring(0, 27) + (+item.length > 27 ? "..." : "")}
          </SideBarListItem>
        ))}
      </SideBarList>
    </RSideBarContainer>
  );
};

export default RightSideBar;
