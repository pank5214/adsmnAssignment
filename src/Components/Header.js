import React from "react";
import cadburyLogo from "../utils/Images/Cadbury Logo.png";
import twoDLogo from "../utils/Images/2d logo.png";
import hamburger from "../utils/Images/Hamburger.png";

const Header = () => {
  return (
    <div className="relative flex justify-between items-center bg-violet-950 h-20">
      <div className="flex items-center">
        <img className="pl-6 h-10" src={cadburyLogo} alt="cadbury-logo" />
        <img className="h-28" src={twoDLogo} alt="two-d-logo" />
      </div>
      <img className="p-6 h-[70px]" src={hamburger} alt="hamburger" />
    </div>
  );
};

export default Header;
