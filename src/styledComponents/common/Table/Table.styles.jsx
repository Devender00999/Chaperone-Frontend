import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableRow = styled.tr`
  padding: 5px;
`;

export const TableColumnHeading = styled.th`
  padding: 15px 30px !important;
`;
export const TableColumnButtonHeading = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
`;

export const TableColumn = styled.td`
  padding: 15px 30px !important;
`;

export const TableColumnButton = styled.img`
  width: 20px;
  cursor: pointer;
`;
