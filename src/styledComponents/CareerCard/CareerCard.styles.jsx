import styled from "styled-components";

export const CareerCardContainer = styled.div`
  display: flex;
  padding: 1.875rem 2.5rem;
  flex-direction: column;
  margin: 1rem 0;
  border: 1px solid #cacaca;
  border-radius: 2px;
`;

export const CareerTitle = styled.p`
  font-family: poppins;
  margin-bottom: 0;
`;

export const CareerCompany = styled.p`
  color: #ff6600;
  font-family: poppins;
  margin-bottom: 0;
  font-size: 14px;
`;

export const CareerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CareerTypeContainer = styled.div`
  display: Flex;
  align-items: center;
  column-gap: 5px;
  margin-top: 15px;
`;

export const CareerTypeImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const CareerTypeText = styled.p`
  color: #666666;
  font-size: 14px;
  margin: 0;
  font-family: poppins;
`;
export const CareerLogo = styled.img`
  width: 65px;
  height: 100%;
`;
export const CareerTitleContainer = styled.div``;

// Table
export const CareerTable = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
export const CareerTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CareerTableData = styled.p`
  font-size: 13px;
  &:first-child {
    margin-bottom: 0;
    color: #666666;
  }
`;

export const CareerCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CareerFeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  flex: 3;
`;

export const CareerCardFeature = styled.p`
  background: #f6f6f6;
  color: #666666;
  border-radius: 20px;
  font-size: 13px;
  padding: 5px 20px;
  margin-right: 15px;
  margin-bottom: 0;
`;

export const CareerCardLink = styled.a`
  color: #ff6600;
  font-size: 14px;
  flex: 0.6;
  &:hover {
    color: #ff6600;
  }
  cursor: pointer;
`;
