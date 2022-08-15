import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledInput = styled.input`
  border: 2px solid pink;
  padding: 10px 20px;
  color: aqua;
  border-radius: 5px;
  ::placeholder {
    color: aqua;
  }
  .success {
    border: 1px solid green;
  }
  .warning {
    border: 1px solid yellow;
  }
  .error {
    border: 1px solid red;
  }
  @media screen and (max-width: 320px) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    margin-top: 1rem;
  }
`;
export function InputText({ type, placeholder, handleInputChange, name }) {
  return (
    <StyledInput
      type={type ? type : "text"}
      placeholder={placeholder}
      onChange={handleInputChange}
      name={name}
    ></StyledInput>
  );
}
