import styled from "styled-components";

const commonStyles = `
background-color: #1F1F1F;
color: #FFF;
padding: 8px 32px;
border-radius: 50px;
font-size: 18px;
:hover{
    color: #000;
    transition: all 1s ease;
}
`;

const StyledButton = styled.button`
  ${commonStyles}
  animation: glowing 2300ms infinite;
  @media screen and (max-width: 679px) {
    display: none;
  }
`;

const StyledLinkButton = styled.a`
  ${commonStyles}
  @media screen and (max-width: 679px) {
    display: none;
  }
  @keyframes glowing {
    0% {
      background-color: #2ba805;
      box-shadow: 0 0 3px #2ba805;
    }
    50% {
      background-color: #49e819;
      box-shadow: 0 0 10px #49e819;
    }
    100% {
      background-color: #2ba805;
      box-shadow: 0 0 3px #2ba805;
    }
  }
  animation: glowing 2300ms infinite;
`;

export function Button({ isDisabled, type, label, handleClick }) {
  const disabled = isDisabled === undefined ? false : isDisabled;
  return (
    <StyledButton
      disabled={disabled}
      type={type ? type : "button"}
      onClick={() => {
        console.log("Click");
        handleClick();
      }}
    >
      {label}
    </StyledButton>
  );
}
export function Link({ isDisabled, path, label, handleClick }) {
  const disabled = isDisabled === undefined ? false : isDisabled;
  return (
    <StyledLinkButton
      disabled={disabled}
      type={path ?? ""}
      onClick={handleClick}
    >
      {label}
    </StyledLinkButton>
  );
}
