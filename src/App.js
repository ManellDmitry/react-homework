import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

const navLinks = [
  { id: "1", label: "KNOW-HOW" },
  { id: "2", label: "O NAS" },
  { id: "3", label: "BLOG" },
  { id: "4", label: "KONTAKT" },
];

function App() {
  return (
    <div className="App">
      <Header links={navLinks} />
      <Footer />
    </div>
  );
}
export default App;
