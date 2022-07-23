import React from 'react';
import logo from "./images/logo.png"
import styled from 'styled-components';
const List= styled.ul`
display: flex;
`
const Item=styled.li`
margin-right: 40px;
font-size: 12px;
`
const navLinks=[
  {id:"1",label:"KNOW-HOW"},
  {id:"2",label:"O NAS"},
  {id:"3",label:"BLOG"},
  {id:"4",label:"KONTAKT"}
]

function App() {
  return (
    <div className='App'>
        <img src={logo} alt="logo"/>
      <nav>
      <List>
        {navLinks.map(({id,label})=>{
          return (<Item key={id}>
            <a href="/">{label}</a>
            </Item>)
        })}
       
      </List>
      </nav>
      </div>
  );
}

export default App;
