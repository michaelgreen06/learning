import React from "react";
import logo from "../../logo.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img
        src={logo}
        alt="RegenHub Logo"
      />
    </div>
  );
};

export default Logo;
