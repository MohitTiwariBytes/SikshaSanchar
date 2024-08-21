import React from "react";
import "./Home.css";
import logo from "../Assets/logoTransparent.png";
import illu1 from "../Assets/illustration1.svg";

const Home = () => {
  return (
    <div className="home-page-main">
      <div className="homepage">
        <div className="topRegister">
          <img src={logo} alt="" id="logo" />
          <h4>An educational app for all the schools in india!</h4>
        </div>
        <div className="bottomRegister">
          <img src={illu1} alt="" />
          <div className="leftRegister">
            <h1>Register your E-SCHOOL Now!</h1>
            <div className="regButtons">
              <button id="registerSchool">Register</button>
              <button id="joinByID">Join By ID</button>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-mobile">
        <div className="welcome">
          <h1>Welcome! I see, You are not enrolled into any E-SCHOOL</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
