import React from "react";
import Lottie from "lottie-react";

import loader from "../../assets/loader-chaperone.json";

const Loader = () => {
   return (
      <div
         style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <Lottie
            animationData={loader}
            loop
            autoplay={true}
            style={{ height: 50, width: 50 }}
            width={50}
         />
      </div>
   );
};

export default Loader;
