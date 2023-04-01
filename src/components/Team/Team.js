import React from "react";
import Layout from "./Layout";
import styled from "styled-components";
import TeamMember from "./TeamMember";
import image from "./team.png";
import team from "./team.json";
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
            <Heading>Team</Heading>
            <Paragraph>
              We are a group of excited people with a clear sense of purpose. We
              believe in continuous learning and development. We are adaptive to
              upcoming challenges in technology and management. We learn, code,
              preach, and grow together. Here at DSC KIET, we are not just a
              team, we are a growing family of developers.
            </Paragraph>
          </div>
          <ImageWrapper className="col-lg-4">
            <img
              className="img-fluid mb-1"
              src={image}
              alt="team at dsc kiet"
              loading="lazy"
              width="100%"
            />
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
