import React, { Component } from "react";
import TopBanner from "../Banner/TopBanner";
import About from "../AboutSection/About";
import SubAbout from "../AboutSection/SubAbout";
// import Projects from "../Projects/Projects";
// import Team from "../Team/Team";
// import * as apiService from "../../utils/Services";
// import AllProjects from "../Projects/AllProjects";
import Notice from "../Notice";
import notice from "../notice.json";
import Layout from "../Team/Layout";
import styled from "styled-components";
import "../../assets/stylesheets/style.css";
const NoticeSection = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

function Index() {
  return (
    <div>
      <TopBanner />
      <Layout>
        <NoticeSection isVisible={notice.notice.isVisible}>
          <Notice />
        </NoticeSection>
      </Layout>
      <About />
      <SubAbout />
    </div>
  );
}

export default Index;
