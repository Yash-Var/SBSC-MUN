import React, { Component } from "react";
// import logo from "../../assets/images/dsc.svg";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer
        className="mt-5"
        style={{
          background:
            "linear-gradient(to bottom, white 0%, white 50%, #F1F1F1 50%, #F1F1F1 100%)",
        }}
      >
        <div className="container">
          <p className="abtmain heading_text">Contact Us</p>
          <div className="card mt-4 p-0">
            <iframe
              // title="uddeshhya map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1590968383543!2d77.2273223!3d28.5349373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce227b6e6ca7b%3A0xe728c244a124a4!2sShaheed%20Bhagat%20Singh%20College!5e0!3m2!1sen!2sin!4v1680373025378!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ borderRadius: 4, border: 0 }}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="container">
          <div className="row pt-4 pb-4">
            <div className="col-lg-6">
              <p>
                <strong>Reach Us</strong>
              </p>
              <p>Iron Railing Rd, Phase II, Sheikh Sarai, New Delhi, Delhi.</p>
              <p>munsocsbsc@gmail.com</p>
              <p>+91-89799 18777</p>
            </div>
            <div className="col-lg-3" />
            <div className="col-lg-3">
              <p>
                <strong>All Rights Reserved At SBSC MUN @2023</strong>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
