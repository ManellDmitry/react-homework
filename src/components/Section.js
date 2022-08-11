import React from "react";
import styled from "styled-components";
import { Container } from "./styledComponents";
import arrow from "../images/arrow.png"

const StyledSectionTitle= styled.h3`
color: #E8244F;
font-size: 10px;
line-height: 3.4;
letter-spacing: 0.44px;
text-transform: uppercase;
padding-bottom:89px;
`
const StyledSectionMainSubtitles= styled.p`
color: #000;
font-size: 46px;

`
const StyledSectionSecondSubTitles=styled.p`
color: #000;
font-size: 16px;
`
const SectionContainer = styled(Container)`
background-color: #fff;
`


export function Section() {
    return(
            <SectionContainer>
        <section className="section_help">
    <StyledSectionTitle>Jak możemy pomóc</StyledSectionTitle>
    <ul>
        <li>
            <StyledSectionMainSubtitles>Transformacje</StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>Agile・Lean・Brand・Digital innovation</StyledSectionSecondSubTitles>
            <a href="/"><img src={arrow} alt="arrow"/></a>
        </li>
        <li>
            <StyledSectionMainSubtitles>Wsparcie</StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>Doradztwo ・Narzędzia ・Coaching menedżerski</StyledSectionSecondSubTitles>
            <a href="/"><img src={arrow} alt="arrow"/></a>
        </li>
        <li>
            <StyledSectionMainSubtitles>Rozwój</StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>Warsztaty・Symulacje ・Szkolenia hybrydowe</StyledSectionSecondSubTitles>
            <a href="/"><img src={arrow} alt="arrow"/></a>
        </li>
        <li>
            <StyledSectionMainSubtitles>Przedsiębiorczość</StyledSectionMainSubtitles>
            <StyledSectionSecondSubTitles>Mentoring・Relacje wspólnicze・Nowy biznes</StyledSectionSecondSubTitles>
            <a href="/"><img src={arrow} alt="arrow"/></a>
        </li>
    </ul>
        </section>
        </SectionContainer>
    )
}