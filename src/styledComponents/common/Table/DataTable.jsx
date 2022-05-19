import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import {
  TableRow,
  TableColumn,
  TableColumnHeading,
  TableContainer,
} from "./DataTable.styles";

const header = (page) => {
  switch (page) {
    case "Admission":
      return "Author";
    case "Academics":
      return "Subject Name";
    case "Career":
      return "Company Name";
    default:
      return "Author";
  }
};

const DataTable = (props) => {
  const { data, onEdit, onDelete, page } = props;
  return data != null ? (
    <TableContainer>
      <TableRow style={{ background: "#ff6600", color: "#FFF" }}>
        <TableColumnHeading style={{ flex: 4 }}>Title</TableColumnHeading>
        <TableColumnHeading style={{ flex: 3 }}>
          {header(page)}
        </TableColumnHeading>
        <TableColumnHeading
          style={{
            flex: 1,
            display: props.likes === false ? "none" : "block",
          }}
        >
          Likes
        </TableColumnHeading>
        <TableColumnHeading style={{ flex: 1 }}>Edit</TableColumnHeading>
        <TableColumnHeading style={{ flex: 1 }}>Delete</TableColumnHeading>
      </TableRow>
      {data.map((blog, id) => {
        const chil1 = (page) => {
          switch (page) {
            case "Admission":
              return blog.heading;
            case "Academics":
              return blog.topname;
            case "Career":
              return blog.position;

            default:
              return blog.heading;
          }
        };
        const chil2 = (page) => {
          switch (page) {
            case "Admission":
              return blog.author.name;
            case "Academics":
              return blog.subName;
            case "Career":
              return blog.companyName;
            default:
              return blog.author.name;
          }
        };

        return (
          <TableRow key={id}>
            <TableColumn style={{ flex: 4 }}>{chil1(page)} </TableColumn>
            <TableColumn style={{ flex: 3 }}>{chil2(page)}</TableColumn>
            <TableColumn
              style={{
                flex: 1,
              }}
            >
              {blog.likes ? blog.likes : 0}
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
                onClick={() => onEdit(blog._id)}
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
                onClick={() => onDelete(blog._id)}
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
