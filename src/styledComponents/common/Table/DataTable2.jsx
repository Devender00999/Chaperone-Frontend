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
   return data.length > 0 ? (
      <TableContainer>
         <TableRow style={{ background: "#ff6600", color: "#FFF" }}>
            {props.tableHeadings.map((heading) => (
               <TableColumnHeading style={{ flex: 4 }}>
                  {heading}
               </TableColumnHeading>
            ))}
            <TableColumnHeading style={{ flex: 1 }}>Edit</TableColumnHeading>
            <TableColumnHeading style={{ flex: 1 }}>Delete</TableColumnHeading>
         </TableRow>
         {data.map((content) => {
            return (
               <TableRow key={content[0]}>
                  {content.slice(1).map((item) => (
                     <TableColumn style={{ flex: 4 }}>{item} </TableColumn>
                  ))}

                  <TableColumn
                     style={{
                        flex: 1,
                        textAlign: "center",
                        padding: "0 !important",
                     }}
                  >
                     <EditRoundedIcon
                        className="pointer-cursor"
                        onClick={() => onEdit(content[0])}
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
                        onClick={() => onDelete(content[0])}
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
