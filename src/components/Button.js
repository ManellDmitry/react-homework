import styled from "styled-components"

const commonStyles=`
background-color: #1F1F1F;
color: #FFF;
padding: 8px 32px;
border-radius: 50px;
font-size: 18px;
:hover{
    color: aqua;
    transition: all 1s ease;
}
`

const StyledButton=styled.button`
    ${commonStyles}
    `
    const StyledLinkButton=styled.a`
    ${commonStyles}
    
    `
export  function Button({type,label,handleClick}){
    return(
        <StyledButton type={type ?? "button"} onClick={handleClick}>
            {label}
        </StyledButton>
    )
}
export function Link({path, label,handleClick}){
    return(
        <StyledLinkButton type={path ?? ""} onClick={handleClick}>
            {label}
        </StyledLinkButton>
    )
}