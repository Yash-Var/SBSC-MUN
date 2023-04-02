import React from "react";
import yash from "../Team/Debate.json";
// import Ai from "../../Event.css";
import "../../Event.css";
// import { AiFillAccountBook } from "react-icons/ai";
import Lottie from "lottie-react";
import Carousel from "../Carousel";
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
    </div>
  );
};

export default Event;
