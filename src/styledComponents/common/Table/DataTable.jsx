import React from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import {
   TableRow,
   TableColumn,
   TableColumnHeading,
   TableContainer,
} from "./DataTable.styles";
import { Alert } from "@mui/material";

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
   const { data, onEdit, id: pid, onDelete, page } = props;
   return data.length > 0 ? (
      <TableContainer style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
         <TableRow
            style={{ background: "#ff6600", color: "#FFF", border: "none" }}
         >
            <TableColumnHeading style={{ flex: 4 }}>Title</TableColumnHeading>
            <TableColumnHeading style={{ flex: 3 }}>
               {header(page)}
            </TableColumnHeading>
            <TableColumnHeading
               style={{
                  flex: 1,
                  display: props.likes ? "none" : "none",
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
                  {props.likes && (
                     <TableColumn
                        style={{
                           flex: 1,
                        }}
                     >
                        {blog.likes ? blog.likes : 0}
                     </TableColumn>
                  )}
                  <TableColumn
                     style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "0 !important",
                     }}
                  >
                     <EditRoundedIcon
                        className="pointer-cursor"
                        onClick={() => onEdit(blog._id, pid)}
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
                        onClick={() => onDelete(blog._id, pid)}
                     />
                  </TableColumn>
               </TableRow>
            );
         })}
      </TableContainer>
   ) : (
      <Alert style={{ marginTop: "20px" }} severity="warning">
         No Data Available to Show
      </Alert>
   );
};

export default DataTable;
