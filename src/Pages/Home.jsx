import React, { useState } from "react";
import "./Home.css";
import logo from "../Assets/logoTransparent.png";
import illu1 from "../Assets/illustration1.svg";
import gsap from "gsap";

const Home = () => {
  const [isJoinOpen, setJoinOpen] = useState(false);

  function handleJoinOpenClick() {
    setJoinOpen(!isJoinOpen);

    if (isJoinOpen) {
      gsap.fromTo(
        ".joinCard",
        {
          top: "200%",
          duration: 0.5,
          ease: "power3.out",
        },
        {
          top: "50%",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else {
      gsap.fromTo(
        ".joinCard",
        {
          top: "50%",
          duration: 0.5,
          ease: "power3.out",
        },
        {
          top: "200%",
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }
  }

  return (
    <div className="home-page-main">
      <div className="joinCard">
        <i
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            left: "40px",
          }}
          onClick={handleJoinOpenClick}
          class="fa-solid fa-xmark fa-2x"
        ></i>
        <h1>Enter your school's UDISE code</h1>
        <input type="text" placeholder="Enter 11 digit UDISE code" />
        <button id="nextJoin">Next</button>
      </div>
      <div className="registerCard"></div>
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
              <button onClick={handleJoinOpenClick} id="joinByID">
                Join By UDISE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-mobile">
        <div className="topRegisterMobile">
          <img style={{ height: "290px" }} src={logo} alt="" id="logo" />
          <h4>An educational app for all the schools in india!</h4>
        </div>

        <div className="bottomRegisterMobile">
          <h1>Welcome!</h1>
          <h4>Join or register a school to continue.</h4>
          <div className="regButtons">
            <button id="registerSchool">Register</button>
            <button onClick={handleJoinOpenClick} id="joinByID">
              Join By UDISE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
