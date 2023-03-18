import React from "react";
import "../../App.css";
const TopNav = () => {
  return (
    <div className="topnav">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 done">munsocsbsc@gmail.com</div>
          <div className="row">
            <div className="col-lg-1 yash">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/the-sbsc-mun-society/"
              >
                <i class="fa-brands fa-linkedin-in icon"></i>
              </a>
            </div>
            <div className="col-lg-1 yash">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/munsoc_sbsc/?igshid=YmMyMTA2M2Y%3D"
              >
                <i className="fab fa-instagram icon" />{" "}
              </a>
            </div>
            <div className="col-lg-1 yash">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/sbscmunsociety?t=ZYUJMljl9mTMyjdGZ7ZD0w&s=09"
              >
                <i className="fab fa-twitter icon" />{" "}
              </a>
            </div>
            <div className="col-lg-1 yash">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@sbscmun"
              >
                <i className="fab fa-youtube icon" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
