import React from "react";
import "../../App.css";

const Button = ({ url, description }) => {
  return (
    <a href={url}>
      <button className="button-link">{description}</button>
    </a>
  );
};

export default Button;
