import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="abtmain mt-5">
          <p>About SBSC MUM Society </p>
        </div>
        <span>
          <strong>Registered under *********</strong>
        </span>
        <p>
          <strong>Registration No : ************</strong>
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="row pt-2">
          <div className="col-lg-3 mb-4">
            <div className="card card-about">
              <span className="abt">0</span>
              <span className="number">Running project</span>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="card card-about">
              <span className="abt">0</span>
              <span className="number">********</span>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="card card-about">
              <span className="abt">000</span>
              <span className="number">***********</span>
            </div>
          </div>
          <div className="col-lg-3 mb-4">
            <div className="card card-about">
              <span className="abt">000</span>
              <span className="number">**************</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
