import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Section } from "./components/Section";
import SectionONas from "./components/SectionO_nas";
import Home from "./pages/Home";
import Blog from "./pages/B_Blog";
import Know_How from "./pages/Know_How";
import Kontakt from "./pages/Kontakt";
import O_Nas from "./pages/O_Nas";
import { ThemeContext } from "./contexts/ThemeContext";
import { AppContext } from "./contexts/AppContext";
import { Allstyles } from "./layout/styles";
import { Routes, Route, NavLink } from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;

const Login = () => {
  return (
    <>
      <h1>Login page</h1>
    </>
  );
};

function App() {
  const initialAppContext = useContext(AppContext);
  const [currentAppContext, setCurrentAppContext] = useState(initialAppContext);

  useEffect(() => {
    const context = setAppContext();
    setCurrentAppContext((prev) => {
      return {
        ...prev,
        ...context,
      };
    });
  }, []);

  function setAppContext() {
    return {
      ...initialAppContext,
      // user: {
      //   name: "Voldemort",
      // },
    };
  }

  return (
    <AppContext.Provider value={currentAppContext}>
      <ThemeContext.Provider value={Allstyles}>
        <PageWrapper>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/know-how" element={<Know_How />} />
              <Route path="/o-nas" element={<O_Nas />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Hero />
            <Section />
            <SectionONas />
            <Footer name="Dima" />
          </main>
        </PageWrapper>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
