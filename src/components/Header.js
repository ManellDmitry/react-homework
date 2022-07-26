import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styled from "styled-components";
const StyledHeader = styled.header`
  background: #000;
`;

function Header({ links }) {
  return (
    <StyledHeader>
      <Logo />
      <Navigation links={links} />
    </StyledHeader>
  );
}
export default Header;
