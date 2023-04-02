import React from "react";
import yash from "../Team/Debate_.json";
// import Ai from "../../Event.css";
import "../../Event.css";
// import { AiFillAccountBook } from "react-icons/ai";
import Lottie from "lottie-react";
import Carousel from "../Carousel";
import Notice from "../Notice";
import notice from "../notice.json";
import Layout from "../Team/Layout";
import styled from "styled-components";
import "../../assets/stylesheets/style.css";
const NoticeSection = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;
const Event = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="about-main">
          <div className="about-main2">
            <div className="about1">
              <center>
                {" "}
                <div className="about-text">Youth Conclave 2023</div>
                <div className="about-text-4">
                  Annual Model United Nations Conference{" "}
                </div>
              </center>
              <div className="about-text-2">
                <div className="text-about">
                  Youth Conclave 2023 is the first edition of two-day long Model
                  United Nations Conference at Shaheed Bhagat Singh College,
                  University of Delhi. Youth Conclave will be conducted on 22-23
                  April, 2023 at college premises. In these two days, the
                  delegates shall debate, deliberate and discuss upon some most
                  pressing issues of the world.
                </div>
                <div className="text-about-2">
                  <Lottie loop={true} animationData={yash} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <center> {/* <Carousel /> */}</center>
      </div>
      <div className="container">
        <center>
          <div className="abtmain2 mt-5">
            <p>Committee In Youth Conclave 2023:</p>
          </div>
        </center>
        <span>
          {/* <strong>
            Committee: United Nations General Assembly Agenda: Deliberation upon
            Sustainable Development Goals 2030 and their implementation with
            special emphasis on climate change.
          </strong> */}
        </span>
      </div>
      <div className="container">
        <div className="abtmain1 mt-5">
          <p>United Nations General Assembly</p>
        </div>
        <span className="content">
          Agenda: Deliberation upon Sustainable Development Goals 2030 and their
          implementation with special emphasis on climate change.
        </span>
      </div>
      <div className="container">
        <div className="abtmain1 mt-5">
          <p>United Nations Human Rights Council</p>
        </div>

        <span className="content">
          Agenda: Deliberation upon current human rights situation in Ukraine in
          the context of Russian invasion.
        </span>
      </div>
      <div className="container">
        <div className="abtmain1 mt-5">
          <p>All India Political Parties Meet</p>
        </div>
        <span className="content">
          Agenda: Deliberation upon 9 years of NDA government with special
          emphasis on economy and secularism.
        </span>
      </div>
      <div className="container">
        <div className="abtmain1 mt-5">
          <p>International Press</p>
        </div>
        <span className="content">
          Agenda: Call for journalists and photographers for strengthened role
          of media
        </span>
      </div>
      <Layout>
        <NoticeSection isVisible={notice.notice.isVisible}>
          <Notice />
        </NoticeSection>
      </Layout>
    </div>
  );
};

export default Event;
