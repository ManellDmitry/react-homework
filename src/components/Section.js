import React from "react";
import styled from "styled-components";
import { Container } from "./styledComponents";
import { Icon } from "./Icon";

const StyledSectionTitle = styled.h2`
  color: #e8244f;
  font-size: 10px;
  line-height: 3.4;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  padding-bottom: 89px;
`;

const StyledSectionMainSubtitle = styled.h3`
  color: #000;
  font-size: 46px;
`;
const StyledSectionSecondSubTitles = styled.ul`
  color: #000;
  font-size: 16px;
`;
const SectionContainer = styled(Container)`
  background-color: #fff;
`;

const data = [
  {
    id: "1",
    title: "Transformacje",
    items: ["Agile", "Lean", "Brand", "Digital innovation"],
  },
  {
    id: "2",
    title: "Wsparcie",
    items: ["Doradztwo", "Narzędzia", "Coaching menedżerski"],
  },
  {
    id: "3",
    title: "Rozwój",
    items: ["Warsztaty", "Symulacje", "Szkolenia hybrydowe"],
  },
  {
    id: "4",
    title: "Przedsiębiorczość",
    items: ["Mentoring", "Relacje wspólnicze", "Nowy biznes"],
  },
];
export function Section() {
  return (
    <SectionContainer>
      <section className="section_help">
        <StyledSectionTitle>Jak możemy pomóc</StyledSectionTitle>
        <ul>
          {data.map(({ id, title, items }) => {
            return (
              <li key={id}>
                <StyledSectionMainSubtitle>{title}</StyledSectionMainSubtitle>
                <ul>
                  {items.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
                <Icon iconId="arrow" />
              </li>
            );
          })}
        </ul>
      </section>
    </SectionContainer>
  );
}
