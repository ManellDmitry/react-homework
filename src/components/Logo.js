import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <div>
        <img src={logo} alt="logo" />
      </div>
    </Link>
  );
}

export default Logo;
