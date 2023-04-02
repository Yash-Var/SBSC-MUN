import React from "react";
// import { a } from "react-router-dom";
import logo from "../../assets/images/logo_final.png";
import "./style.css";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <div>
      {/* <TopNav /> */}
      <nav className="navbar navbar-expand-lg navbar-light navbar_full">
        <div className="container">
        <a href="/">
            <img
              src={logo}
              alt="logo"
              width="80px"
              // height="54px"
              style={{ marginRight: "32px" }}
            />
          </a>
         
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto nav">
              <li className="nav-item">
             
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/event">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Editorials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/team">
                  Meet The Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
