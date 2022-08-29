import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import { Section } from "./components/Section";
import SectionONas from "./components/SectionO_nas";
import Home from "./pages/Home";
import Blog from "./pages/B_Blog";
import KnowHow from "./pages/KnowHow";
import Kontakt from "./pages/Kontakt";
import AboutUs from "./pages/AboutUs";
import { ThemeContext } from "./contexts/ThemeContext";
import { AppContext } from "./contexts/AppContext";
import { Allstyles } from "./layout/styles";
import { Routes, Route } from "react-router-dom";
import "./i18n";

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
              <Route path="/know-how" element={<KnowHow />} />
              <Route path="/o-nas" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Section />
            <SectionONas />
            {/* <Footer name="Dima" /> */}
          </main>
        </PageWrapper>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
