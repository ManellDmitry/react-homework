import React from "react";
import { Button, Link } from "../components/Button";
import { Container } from "../components/styledComponents";

export function Kontakt() {
  const handleButtonClick = () => {};
  const handleLinkButtonClick = () => {};
  return (
    <div style={{ display: "flex", alignItems: "center", font: "caption" }}>
      <Container>
        <Button label="Sandra" handleClick={handleButtonClick} />
        <Link label="Tania" handleClick={handleLinkButtonClick} />
      </Container>
    </div>
  );
}
