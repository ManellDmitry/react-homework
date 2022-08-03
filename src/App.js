import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/B_Blog";
import { Know_How } from "./pages/Know_How";
import { Kontakt } from "./pages/Kontakt";
import { O_Nas } from "./pages/O_Nas";

const navLinks = [
  { id: "1", label: "KNOW-HOW" },
  { id: "2", label: "O NAS" },
  { id: "3", label: "BLOG" },
  { id: "4", label: "KONTAKT" },
];

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;

function App() {
  return (
    <PageWrapper>
      <Header links={navLinks} />
      <main>
        <Routes>
          <Route element={<Home />}></Route>
          <Route element={<Know_How />}></Route>
          <Route element={<O_Nas />}></Route>
          <Route element={<Blog />}></Route>
          <Route element={<Kontakt />}></Route>
        </Routes>
        <Hero />
        <Footer name="Dima" />
      </main>
    </PageWrapper>
  );
}

export default App;
