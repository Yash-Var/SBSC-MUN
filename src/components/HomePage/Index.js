import React, { Component } from "react";
import TopBanner from "../Banner/TopBanner";
import About from "../AboutSection/About";
import SubAbout from "../AboutSection/SubAbout";
// import Projects from "../Projects/Projects";
// import Team from "../Team/Team";
// import * as apiService from "../../utils/Services";
// import AllProjects from "../Projects/AllProjects";
import "../../assets/stylesheets/style.css";
function Index() {
  return (
    <div>
      <TopBanner />
      <About />
      <SubAbout />
    </div>
  );
}

export default Index;
