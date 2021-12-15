import styled from "styled-components";

export const CareerCardContainer = styled.div`
  display: flex;
  padding: 1.875rem 2.5rem;
  flex-direction: column;
  margin: 1rem 2rem;
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
  font-size: 0.875rem;
`;

export const CareerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CareerTypeContainer = styled.div`
  display: Flex;
  align-items: center;
  column-gap: 0.3125rem;
  margin-top: 0.9375rem;
`;

export const CareerTypeImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
export const CareerTypeText = styled.p`
  color: #666666;
  font-size: 0.875rem;
  margin: 0;
  font-family: poppins;
`;
export const CareerLogo = styled.img`
  width: 4.0625rem;
  height: 100%;
`;
export const CareerTitleContainer = styled.div``;

// Table
export const CareerTable = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
`;
export const CareerTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const CareerTableData = styled.p`
  font-size: 0.8125rem;
  &:first-child {
    margin-bottom: 0;
    color: #666666;
  }
`;

export const CareerCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
`;

export const CareerFeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.625rem;
  flex: 3;
`;

export const CareerCardFeature = styled.p`
  background: #f6f6f6;
  color: #666666;
  border-radius: 1.25rem;
  font-size: 0.8125rem;
  padding: 5px 20px;
  margin-right: 15px;
  height: max-content;
  margin-bottom: 0;
`;

export const CareerCardLink = styled.a`
  color: #ff6600;
  font-size: 0.875rem;
  flex: 0.6;
  &:hover {
    color: #ff6600;
  }
  cursor: pointer;
`;
