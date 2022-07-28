import styled from "styled-components";

export const Container = styled.div`
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  @media screen and (min-width: 679px) {
    min-width: 679px;
    padding: 20px 60px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 1440px;
    padding: 34px 84px;
  }
`;
