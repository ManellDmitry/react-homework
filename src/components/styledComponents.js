// import React from "react";
import styled from "styled-components";

export const Container=styled.div`
display: contents;  //без контенст весь контейнер становиться по центру
width: 320px;
margin: 0 auto;
padding: 0 15px;
  @media screen and(min-width: 679px){
  width:679px;
  padding: 0 20px;
}
  @media screen and(min-width: 1200px){
  width:1200px;
  padding: 0 30px;
  }
`;