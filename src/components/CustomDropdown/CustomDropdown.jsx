import React, { useEffect, useState } from "react";
const CustomDropdown = ({
  Toggle,
  Menu,
  float,
  width,
  showMenu,
  setShowMenu,
}) => {
  const [sMenu, setSMenu] = useState("");
  useEffect(() => {
    setSMenu(showMenu);
  }, [sMenu, showMenu]);
  const direction = float === "left" ? `-100% + ${width}px` : "0px";
  const handleShowMenu = () => {
    if (showMenu === "flex") {
      setShowMenu("none");
      setSMenu(showMenu);
    } else if (showMenu === "none") {
      setShowMenu("flex");
      setSMenu(showMenu);
    }
  };
  return (
    <div style={{ minWidth: width }} className="customDropdown">
      <span style={{ display: "flex" }} onClick={handleShowMenu}>
        {Toggle}
      </span>
      <div
        style={{
          display: sMenu,
          transform: `translate(calc(${direction}), 0)`,
          minWidth: width,
        }}
        className="customDropdownMenu"
      >
        {<Menu />}
      </div>
    </div>
  );
};
export default CustomDropdown;
