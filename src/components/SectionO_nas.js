import React from "react";
import styled from "styled-components";
import { Container } from "./styledComponents";

const StyledSection = styled.div`
  padding-bottom: 137px;
  background-color: #fff;
`;
const StyledTitle = styled.h2`
  color: #000;
  font-size: 114px;
`;
const StyledPostTitle = styled.p`
  color: #000;
  font-size: 17px;
`;

function SectionONas() {
  return (
    <StyledSection>
      <Container>
        <StyledTitle>Prawdziwe historie</StyledTitle>
        <StyledPostTitle>
          Zapraszamy do lektury historii klientów, partnerów i przyjaciół, z
          którymi mamy przyjemność wędrować drogą rozwoju i przedsiębiorczości.
          Każda historia jest inna, bo stoją za nimi unikalne organizacje
          tworzone przez ludzi obdarzonych wyjątkowymi pomysłami, talentami i
          doświadczeniami.
        </StyledPostTitle>
        <ul></ul>
      </Container>
    </StyledSection>
  );
}
export default SectionONas;
