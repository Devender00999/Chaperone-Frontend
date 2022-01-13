import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f6f6f6;
  }
`;

export const TableColumnHeading = styled.div`
  font-size: 1.2rem;
  padding: 10px 30px !important;
  font-weight: bold;
`;
export const TableColumnButtonHeading = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
`;

export const TableColumn = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 30px !important;
`;

export const TableColumnButton = styled.img`
  width: 20px;
  cursor: pointer;
`;
