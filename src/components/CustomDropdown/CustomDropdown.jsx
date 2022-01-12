import React, { useState } from "react";
const CustomDropdown = ({ Toggle, Menu, float, width }) => {
  const direction = float === "left" ? `-100% + ${width}px` : "0px";
  const [showMenu, setShowMenu] = useState("none");
  const handleShowMenu = () => {
    if (showMenu === "flex") setShowMenu("none");
    if (showMenu === "none") setShowMenu("flex");
  };
  return (
    <div style={{ minWidth: width }} className="customDropdown">
      <span style={{ display: "flex" }} onClick={handleShowMenu}>
        {Toggle}
      </span>
      <div
        style={{
          display: showMenu,
          transform: `translate(calc(${direction}), 0)`,
          minWidth: width,
        }}
        className="customDropdownMenu"
      >
        {Menu}
      </div>
    </div>
  );
};
export default CustomDropdown;
