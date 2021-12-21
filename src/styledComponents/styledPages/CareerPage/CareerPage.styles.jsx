import styled from "styled-components";

export const CareerPageContainer = styled.div`
  border: 1px solid #666666;
  margin: 10px 0 30px 0;
  padding: 30px;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
`;

export const CareerHeading = styled.h3`
  font-size: 1.3rem;
`;
export const CareerCompayHeading = styled.span`
  font-size: 1.3rem;
  color: #ff6600;
`;

export const CareerAddress = styled.p`
  font-size: 14px;
  color: #666666;
`;

export const CareerExtraInfo = styled.p`
  font-size: 10px;
`;

export const CareerAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CareerAboutHeading = styled.p`
  font-family: poppins;
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CareerAboutDescription = styled.p`
  font-family: poppins;
  margin: 5px 0;
  color: #515151;
  margin-bottom: 15px;
  font-size: 0.875rem;
`;

export const CareerListContainer = styled.div`
  margin-top: 20px;
`;

export const CareerList = styled.ul`
  list-style-type: disc;
  margin: 5px;
`;

export const CareerListItem = styled.li`
  font-family: poppins;
  margin: 2px 0 0 0;
  color: #515151;
  font-size: 0.875rem;
  &::marker {
    color: #6b6b6b;
    font-size: 12px;
  }
`;
