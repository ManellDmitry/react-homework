import React from "react";
import styled from "styled-components";
const StyledFooter = styled.footer``;
const StyledFooterLinks = styled.a`
  :hover {
    color: aquamarine;
    transition: 1s ease;
  }
  font-size: 64px;
  display: inline-block;
`;
const StyledParags = styled.p`
  color: #fff;
  font-size: 10px;
`;
const StyledAdress = styled.address`
  color: #fff;
  font-size: 20px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledParags>umów się na bezpłatną konsultację</StyledParags>
      <ul>
        <li>
          <StyledFooterLinks href="mailto:hello@leanspin.pl">
            hello@leanspin.pl
          </StyledFooterLinks>
        </li>
        <li>
          <StyledFooterLinks href="tel:+48534999080">
            +48 534 999 080
          </StyledFooterLinks>
        </li>
      </ul>
      <StyledAdress>
        <p>Studio LEANSPIN, Gałczyńskiego 33</p>
        <p>52-214 Wrocław, Polska</p>
      </StyledAdress>
    </StyledFooter>
  );
}
export default Footer;
