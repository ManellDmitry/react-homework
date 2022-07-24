import React from 'react';
import styled from 'styled-components';
const List= styled.ul`
display: flex;
`
const Item=styled.li`
margin-right: 40px;
font-size: 12px;
:hover{
   background-color: aqua;
   transition: 1s  ease;
}
`

function Navigation({links}) {
    return(
        <nav>
        <List>
          {links && links.map(({id,label})=>
             (<Item key={id}>
              <a href="/">{label}</a>
              </Item>)
          )}
         
        </List>
        </nav>
    )
}
export default Navigation;