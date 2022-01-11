import React from "react";
// import { Table } from "react-bootstrap";
import {
  TableRow,
  TableColumn,
  TableColumnButton,
  TableColumnHeading,
} from "./Table.styles";

const Blogs = [
  {
    heading: "The Road Not Taken",
    author: "Deepak Kumar",
    likes: 100,
  },
  {
    heading: "The Quick Brown fox",
    author: "Devender Kumar",
    likes: 100,
  },
  {
    heading: "Life is very precious",
    author: "Jasveen Kaur",
    likes: 100,
  },
  {
    heading: "What is meaning of happiness.",
    author: "Kushdeep Walia",
    likes: 100,
  },
];

const DataTable = () => {
  return (
    <table striped bordered hover>
      <thead>
        <tr>
          <TableColumnHeading>Heading</TableColumnHeading>
          <TableColumnHeading>Author</TableColumnHeading>
          <TableColumnHeading>Likes</TableColumnHeading>
          <TableColumnHeading></TableColumnHeading>
          <TableColumnHeading></TableColumnHeading>
        </tr>
      </thead>
      <tbody>
        {Blogs.map((blog, id) => {
          return (
            <TableRow key={id}>
              <TableColumn>{blog.heading} </TableColumn>
              <TableColumn>{blog.author}</TableColumn>
              <TableColumn>{blog.likes}</TableColumn>
              <TableColumn
                style={{ textAlign: "center", padding: "0 !important" }}
              >
                <TableColumnButton src="/images/table/edit.svg" />
              </TableColumn>
              <TableColumn
                style={{ textAlign: "center", padding: "0 !important" }}
              >
                <TableColumnButton src="/images/table/delete.svg" />
              </TableColumn>
            </TableRow>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
