import React from 'react';
import logo from "./images/logo.png"
import Navigation from './components/Navigation';
import Footer from './components/Footer';

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
        <Navigation links={navLinks}/>
        <Footer/>
      </div>
  );
}
export default App;
