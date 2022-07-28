import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styled from "styled-components";
import { Container } from "./styledComponents";

const StyledHeader = styled.header`
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header({ links }) {
  return (
    <StyledHeader>
      <Container>
      <Logo />
      <Navigation links={links} />
      </Container>
    </StyledHeader>
  );
}
export default Header;
