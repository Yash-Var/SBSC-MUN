import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import TeamMember from "./TeamMember";
import image from "./team.png";
import team from "./team.json";
import Lottie from "lottie-react";
import AI from "./team2.json";
const Heading = styled.h2`
  font-family: Sen;
  font-weight: 700;
  color: #424242;
  margin-top: 40px;
`;

const Paragraph = styled.p`
  font-family: Sen;
  font-size: 16px;
  color: #707070;
  margin-top: 16px;
`;

const ImageWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
// export async function getStaticProps() {
//   const data = await import("./team.json");
//   //   console.log(data);
//   return {
//     props: {
//       team: data.default,
//     },
//   };
// }

const Team = () => (
  <Layout>
    <div>
      <div className="">
        <div className="row mt-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <Heading>Our Team</Heading>
            <Paragraph>
              Presenting you the Core Team for the academic session 2022-23. The
              Core Team undertakes key roles and works required to smoothly run
              the society and its departments.
            </Paragraph>
          </div>
          <ImageWrapper className="col-lg-4">
            {/* <img
              className="img-fluid mb-1"
              src={image}
              alt="team at dsc kiet"
              loading="lazy"
              width="100%"
            /> */}
            <Lottie loop={true} animationData={AI} />
          </ImageWrapper>
          <div className="col-lg-1"></div>
        </div>
        <div className="row mt-5">
          {team
            ? team.map((member, i) => <TeamMember key={i} member={member} />)
            : null}
        </div>
      </div>
    </div>
  </Layout>
);

export default Team;
