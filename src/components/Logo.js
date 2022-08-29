import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  @media screen and (max-width: 320px) {
    margin-left: 50%;
  }
  @media screen and (max-width: 680px) {
    margin-left: 50%;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <StyledLogo>
        <img src={logo} alt="logo" />
      </StyledLogo>
    </Link>
  );
}

export default Logo;
