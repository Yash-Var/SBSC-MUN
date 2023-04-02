import React, { useState } from "react";
// import * as apiService from "../../utils/Services";

const Contact = (props) => {
  return (
    <div className="container">
      <div className="abtmain mt-5">
        <p>Get in Touch</p>
      </div>

      <div className="row">
        <div className="col-lg-12 mx-auto">
          <div className="card">
            <div className="main-box">
              <form>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div className="col-lg-4 mt-3">
                      <label>Phone</label>
                      <input
                        required
                        name="phone"
                        type="number"
                        className="form-control"
                        placeholder="Number"
                      />
                    </div>

                    <div className="col-lg-4 mt-3">
                      <label>Email</label>
                      <input
                        required
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="col-lg-6 mt-3">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        cols="30"
                        required
                        rows="5"
                        placeholder="Message"
                      />
                    </div>
                    <div
                      className="col-lg-12 mt-4 mb-4"
                      style={{ display: "flex" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.2)" }}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-lg-12">
                      <h6></h6>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
