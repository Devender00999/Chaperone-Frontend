import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const StyledMain = styled.div`
  display: flex;
  height: calc(100vh - 65px);
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 1.25rem 1.25rem 0;
  height: calc(100vh - 95px);
  display: flex;
  width: 100%;
  border-left: 1px solid #f2f2f2;
  flex: 4;
`;
export const MainContent = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.direction};
  overflow: auto;
  padding: 0 2rem;
`;
export const LSideBarContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 20px 0px;
  align-items: center;
  flex: 0.8;
  flex: 1;
  flex-direction: column;
`;

export const RSideBarContainer = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: flex-start;
  flex: 0.8;
  flex: 1;
  flex-direction: column;
`;

export const HeadingText = styled.h3`
  margin: 0 0 25px 0;
`;

export const HeadingContent = styled.h2`
  display: flex;
  column-gap: 30px;
  height: 40px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
