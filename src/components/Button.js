import styled from "styled-components"

const commonStyles=`
background-color: #1F1F1F;
color: #FFF;
padding: 8px 32px;
border-radius: 4px;
font-size: 18px;
:hover{
    color: aqua;
    transition: all 0.5s ease;
}
`

const StyledButton=styled.button`
    ${commonStyles}
    `
    const StyledLinkButton=styled.a`
    ${commonStyles}
    `
export  function Button({type,label}){
    return(
        <StyledButton type={type ?? "button"}>
            {label}
        </StyledButton>
    )
}
export function Link({path, label}){
    return(
        <StyledLinkButton type={path ?? ""}>
            {label}
        </StyledLinkButton>
    )
}