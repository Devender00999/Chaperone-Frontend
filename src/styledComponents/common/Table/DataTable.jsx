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
  const { data, onEdit, onDelete, page } = props;
  return data.length > 0 ? (
    <TableContainer>
      <TableRow style={{ background: "#ff6600", color: "#FFF" }}>
        <TableColumnHeading style={{ flex: 4 }}>Title</TableColumnHeading>
        <TableColumnHeading style={{ flex: 3 }}>{page === "Academics" ? "Subject Name" : "Author"}</TableColumnHeading>
        <TableColumnHeading
          style={{ flex: 1, display: props.likes === false ? "none" : "block" }}
        >
          Likes
        </TableColumnHeading>
        <TableColumnHeading style={{ flex: 1 }}>Edit</TableColumnHeading>
        <TableColumnHeading style={{ flex: 1 }}>Delete</TableColumnHeading>
      </TableRow>
      {data.map((blog, id) => {
        return (
          <TableRow key={id}>
            <TableColumn style={{ flex: 4 }}>{blog.topname ? blog.topname : blog.heading} </TableColumn>
            <TableColumn style={{ flex: 3 }}>{page === "Academics" ? blog.subName : blog.author}</TableColumn>
            <TableColumn
              style={{
                flex: 1,
                display: props.likes === false ? "none" : "block",
              }}
            >
              {blog.likes}
            </TableColumn>
            <TableColumn
              style={{
                flex: 1,
                textAlign: "center",
                padding: "0 !important",
              }}
            >
              <EditRoundedIcon
                className="pointer-cursor"
                onClick={() => onEdit(blog._id, props._id)}
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
                onClick={() => onDelete(blog._id, props._id)}
              />
            </TableColumn>
          </TableRow>
        );
      })}
    </TableContainer>
  ) : (
    <h4 style={{ color: "#aaa", textAlign: "center", padding: "1rem 0" }}>
      No Data Available to Show
    </h4>
  );
};

export default DataTable;
