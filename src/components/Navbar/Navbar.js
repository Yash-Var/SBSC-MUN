import React from "react";
import { Link } from "react-router-dom";
import final_logo from "../../assets/images/final_logo.png";
import logo from "../../assets/images/logo_final.png";

import "./style.css";
import TopNav from "./TopNav";

const Navbar = () => {
  return (
    <div>
      {/* <TopNav /> */}
      <nav className="navbar navbar-expand-lg navbar-light navbar_full">
        <div className="container">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              width="80px"
              // height="54px"
              style={{ marginRight: "32px" }}
              className="logo"
            />
          </Link>
          <Link to="/">
            <img
              src={final_logo}
              alt="logo"
              width="80px"
              // height="54px"
              // style={{ marginRight: "32px" }}
              className="final_logo"
            />
          </Link>

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
              <li className="nav-item"></li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/editorial">
                  Editorials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  Meet The Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
