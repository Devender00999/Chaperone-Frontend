import React from "react";
import Lottie from "react-lottie";

import loader from "../../assets/loader-chaperone.json";

const Loader = () => {
   return (
      <div
         style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
         }}
      >
         <Lottie
            options={{
               animationData: loader,
               loop: true,
               autoplay: true,
            }}
            height={50}
            width={50}
         />
      </div>
   );
};

export default Loader;
