import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

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
      <main style={{ flex: "1 0 auto" }}></main>
      <Footer />
    </PageWrapper>
  );
}
export default App;
