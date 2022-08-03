import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styled from "styled-components";
import { Container } from "./styledComponents";

const StyledHeader = styled.header`
  background: #000;
  flex: 0 1 auto;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header({ links }) {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Navigation x={links} />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
