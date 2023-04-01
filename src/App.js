import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/stylesheets/style.css";
// import "./done.css";
import Index from "./components/HomePage/Index";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team";
import styled from "styled-components";
import Notice from "./components/Notice";
import notice from "./components/notice.json";
import Layout from "./components/Team/Layout";
const NoticeSection = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
function App() {
  return (
    <div>
      <Navbar />
      <Index />
      <Layout>
        <NoticeSection isVisible={notice.notice.isVisible}>
          <Notice />
        </NoticeSection>
      </Layout>
      <Team />
      <Footer />
    </div>
  );
}

export default App;
