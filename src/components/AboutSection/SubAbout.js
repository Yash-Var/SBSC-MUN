import React, { Component } from "react";
import "./style.css";
class SubAbout extends Component {
  state = {};
  render() {
    return (
      <div className="tough mt-1">
        <div className="container pb-4">
          <div className="card glimpse-card">
            <p className="abtglimpse pos kushagra">
            Orientation Programme
              
            </p>
          </div>
          <div className="mt-5">
            <p className="abt mt-4" style={{ color: "white" }}>
              <strong></strong>
            </p>
          </div>
          <div className="row mt-4 mb-4">
            <div className="col-lg-4 mb-4">
              <div className="card card-about">
                <span className="abt">100+</span>
                <span className="number">Associated Members</span>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card card-about">
                <span className="abt">Youth Conclave 2023</span>
                <span className="number">Upcoming Event</span>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card card-about">
                <span className="abt">Project SDG</span>
                <span className="number">Upcoming Project</span>
              </div>
            </div>
          </div>
          {/* <div className="row mt-4 mb-4">
                <div className="col-lg-4 mb-4">
                    <div className="card card-about card-about-1">
                        <span className="card_body">All Donations except Money</span>
                        <img className="ways-image" src="https://image.flaticon.com/icons/svg/838/838597.svg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card card-about card-about-1">
                        <span className="card_body">Show your Love</span>
                        <img className="ways-image" src="https://image.flaticon.com/icons/svg/838/838618.svg" style={{transform: 'rotateY(180deg)'}} alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card card-about card-about-1">
                        <span className="card_body">Register as a Volunteer</span>
                        <img className="ways-image" src="https://image.flaticon.com/icons/svg/1772/1772040.svg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card card-about card-about-1">
                        <span className="card_body">***************</span>
                        <img className="ways-image" src="https://image.flaticon.com/icons/svg/609/609624.svg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card card-about card-about-1">
                        <span className="card_body">Report a child for Education</span>
                        <img className="ways-image" src="https://image.flaticon.com/icons/svg/1651/1651586.svg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card card-about card-about-1">
                        <span className="card_body">Raise an issue with us</span>
                        <img className="ways-image" src="https://image.flaticon.com/icons/svg/1527/1527451.svg" alt=""/>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    );
  }
}

export default SubAbout;
