import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import {
  TableRow,
  TableColumn,
  TableColumnHeading,
  TableContainer,
} from "./DataTable.styles";

const DataTable = (props) => {
  const { data, onEdit, onDelete } = props;
  return (
    <TableContainer>
      <TableRow style={{ background: "#ff6600", color: "#FFF" }}>
        <TableColumnHeading style={{ flex: 4 }}>Title</TableColumnHeading>
        <TableColumnHeading style={{ flex: 3 }}>Author</TableColumnHeading>
        <TableColumnHeading style={{ flex: 1 }}>Likes</TableColumnHeading>
        <TableColumnHeading style={{ flex: 1 }}>Edit</TableColumnHeading>
        <TableColumnHeading style={{ flex: 1 }}>Delete</TableColumnHeading>
      </TableRow>
      {data.map((blog, id) => {
        return (
          <TableRow key={id}>
            <TableColumn style={{ flex: 4 }}>{blog.heading} </TableColumn>
            <TableColumn style={{ flex: 3 }}>{blog.author}</TableColumn>
            <TableColumn style={{ flex: 1 }}>{blog.likes}</TableColumn>
            <TableColumn
              style={{
                flex: 1,
                textAlign: "center",
                padding: "0 !important",
              }}
            >
              <EditRoundedIcon
                className="pointer-cursor"
                onClick={() => onEdit(blog.id)}
              />
            </TableColumn>
            <TableColumn
              style={{
                flex: 1,
                textAlign: "center",
                padding: "0 !important",
                justifyContent: "center",
              }}
            >
              <DeleteForeverRoundedIcon
                className="pointer-cursor"
                onClick={() => onDelete(blog.id)}
              />
            </TableColumn>
          </TableRow>
        );
      })}
    </TableContainer>
  );
};

export default DataTable;
