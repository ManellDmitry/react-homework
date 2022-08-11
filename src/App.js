import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Section } from "./components/Section";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/B_Blog";
import { Know_How } from "./pages/Know_How";
import { Kontakt } from "./pages/Kontakt";
import { O_Nas } from "./pages/O_Nas";
import  SectionONas  from "./components/SectionO_nas";

// import {AppContext} from "./contexts/AppContext"


const navLinks = [
  { id: "1", label: "KNOW-HOW", path: "know-how" },
  { id: "2", label: "O NAS", path: "o-nas" },
  { id: "3", label: "BLOG", path: "blog" },
  { id: "4", label: "KONTAKT", path: "kontakt" },
];

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;

function App() {
  // const context= useContext(AppContext)
  return (
  //  <AppContext.Provider value={context}>
 <PageWrapper>
      <Header links={navLinks} />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="know-how" element={<Know_How />} />
          <Route path="o-nas" element={<O_Nas />} />
          <Route path="blog" element={<Blog />} />
          <Route path="kontakt" element={<Kontakt />} />
        </Routes>
        <Hero />
        <Section/>
        <SectionONas/>
        <Footer name="Dima" />
      </main>
    </PageWrapper>
  //  </AppContext.Provider>
  );
}

export default App;
