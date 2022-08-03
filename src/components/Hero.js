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
  font-size: 11px;
  font-style: normal;
  color: #999999;
  margin-left: 170px;
`;

const StyledMainTitle = styled.h1`
  font-size: 114px;
  margin-left: 130px;
  .title {
    margin-left: 194px;
    display: block;
  }
`;
const TitleWrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 178px;
  padding-bottom: 210px;
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
    </HeroContainer>
  );
}

export default Hero;
