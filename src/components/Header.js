import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import styled from "styled-components";
import { Container } from "./styledComponents";
import { border } from "@mui/system";

const StyledHeader = styled.header`
  background: #000;
  flex: 0 1 auto;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
`;
const StyledSelect = styled.select`
  border: none;
  outline: none;
  margin-left: 10px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <StyledSelect
          onChange={(e) => {
            localStorage.setItem("lang", e.target.value);
          }}
        >
          <option value="en">English </option>
          <option value="uk">Українська</option>
          <option value="ru">Русский</option>
        </StyledSelect>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
