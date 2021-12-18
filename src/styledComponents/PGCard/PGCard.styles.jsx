import styled from "styled-components";
import { Link } from "react-router-dom";

export const PGContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PGMapLink = styled(Link)`
  color: #ff6600;
  font-size: 0.875rem;
  text-align: right;
  flex: 0.6;
  &:hover {
    color: #ff6600;
  }
  cursor: pointer;
`;

export const PGFeature = styled.p`
  background: #f6f6f6;
  color: #666666;
  border-radius: 20px;
  font-size: 13px;
  padding: 5px 20px;
  margin-right: 15px;
  margin-bottom: 0;
`;
