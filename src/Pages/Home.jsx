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
        </div>
      </div>
    </div>
  );
};

export default Home;
