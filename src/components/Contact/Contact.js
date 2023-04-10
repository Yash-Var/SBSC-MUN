import React, { useState } from "react";
// import * as apiService from "../../utils/Services";
import axios from "axios";
// import env from "react-dotenv";
const Contact = (props) => {
  const url = "https://sbsc-mun-backend.onrender.com";
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    console.log("click");
    axios
      .post(url, {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      })
      .then((res) => {
        console.log(res.data);
        alert("Thanks for Equiring we will shortly contact you :)");
        setData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      });
  }
  return (
    <div className="container">
      <div className="abtmain heading_text mt-5">
        <p>Get in Touch</p>
      </div>

      <div className="row">
        <div className="col-lg-12 mx-auto">
          <div className="card">
            <div className="main-box">
              <form onSubmit={(e) => submit(e)}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 mt-3">
                      <label>Name</label>
                      <input
                        type="text"
                        id="name"
                        onChange={(e) => handle(e)}
                        value={data.name}
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
                        id="phone"
                        onChange={(e) => handle(e)}
                        value={data.phone}
                        type="number"
                        className="form-control"
                        placeholder="Number"
                      />
                    </div>

                    <div className="col-lg-4 mt-3">
                      <label>Email</label>
                      <input
                        required
                        id="email"
                        // name="email"
                        onChange={(e) => handle(e)}
                        value={data.email}
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
                        id="message"
                        name="message"
                        onChange={(e) => handle(e)}
                        value={data.message}
                        // name="message"
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
