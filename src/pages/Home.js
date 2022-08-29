import React from "react";
import Hero from "../components/Hero";
import withLeftSidebar from "../hocs/withLeftSidebar";

function Home() {
  return <Hero />;
}
export default withLeftSidebar(Home);
