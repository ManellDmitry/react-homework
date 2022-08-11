import React from "react";
import { Button, Link } from "../components/Button";

export function Kontakt() {
  const handleButtonClick = () => {};
  const handleLinkButtonClick = () => {};
  return (
    <div style={{ display: "flex", alignItems: "center", font: "caption" }}>
      <Button label="Sandra" handleClick={handleButtonClick} />
      <Link label="Tania" handleClick={handleLinkButtonClick} />
    </div>
  );
}
