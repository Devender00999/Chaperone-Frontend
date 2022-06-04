import React from "react";

function NothingHere({ children }) {
   return (
      <div
         style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <p>{children}</p>
      </div>
   );
}

export default NothingHere;
