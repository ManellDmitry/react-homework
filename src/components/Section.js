import React from "react";
import styled from "styled-components";
import { Container } from "./styledComponents";
import { Icon } from "./Icon";

const StyledSectionTitle = styled.h3`
  color: #e8244f;
  font-size: 10px;
  line-height: 3.4;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  padding-bottom: 89px;
`;
const StyledSectionMainSubtitles = styled.p`
  color: #000;
  font-size: 46px;
`;
const StyledSectionSecondSubTitles = styled.p`
  color: #000;
  font-size: 16px;
`;
const SectionContainer = styled(Container)`
  background-color: #fff;
`;

export function Section() {
  return (
    <SectionContainer>
      <section className="section_help">
        <StyledSectionTitle>Jak możemy pomóc</StyledSectionTitle>
        <ul>
          <li>
            <StyledSectionMainSubtitles>
              Transformacje
            </StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>
              Agile・Lean・Brand・Digital innovation
            </StyledSectionSecondSubTitles>
            <Icon iconId="arrow" />
          </li>
          <li>
            <StyledSectionMainSubtitles>Wsparcie</StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>
              Doradztwo ・Narzędzia ・Coaching menedżerski
            </StyledSectionSecondSubTitles>
            <Icon iconId="arrow" />
          </li>
          <li>
            <StyledSectionMainSubtitles>Rozwój</StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>
              Warsztaty・Symulacje ・Szkolenia hybrydowe
            </StyledSectionSecondSubTitles>
            <Icon iconId="arrow" />
          </li>
          <li>
            <StyledSectionMainSubtitles>
              Przedsiębiorczość
            </StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>
              Mentoring・Relacje wspólnicze・Nowy biznes
            </StyledSectionSecondSubTitles>
            <Icon iconId="arrow" />
          </li>
        </ul>
      </section>
    </SectionContainer>
  );
}
