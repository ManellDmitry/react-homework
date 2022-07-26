import React from "react";
import styled from "styled-components";
import { Container } from "./styledComponents";
import img from "../images/Frame.png";

const HeroContainer = styled(Container)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const MainOverhead = styled.p`
  font-size: 0.6875rem;
  font-style: normal;
  color: #999999;
  margin-left: 170px;
`;

const StyledMainTitle = styled.h1`
  font-size: 7rem;
  margin-left: 130px;
  .title {
    margin-left: 194px;
    display: block;
  }
  @media screen and (max-width: 320px) {
    font-size: 2rem;
    max-width: 320px;
    margin: 0 auto;
  }
`;

const TitleWrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 178px;
  padding-bottom: 210px;
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 38px;
  padding-bottom: 80px;
`;

function Hero() {
  return (
    <HeroContainer>
      <TitleWrapper>
        <MainOverhead>Spin!</MainOverhead>
        <StyledMainTitle>
          [re]designing <span className="title">your business</span>
        </StyledMainTitle>
      </TitleWrapper>
      <PostTitle>
        <p className="hero_styled_posttitle">
          Pomagamy rozwijać progresywne firmy, zespoły
          <br />i kompetencje w coraz szybciej zmieniającym się świecie.
        </p>
        <p>
          Poznajmy się!
          <br />
          <span className="hero_posttitle_span">
            Umów się na bezpłatną konsultację
          </span>
        </p>
      </PostTitle>
    </HeroContainer>
  );
}

export default Hero;
