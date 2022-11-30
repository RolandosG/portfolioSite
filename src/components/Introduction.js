import React from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {BsChevronDoubleDown} from 'react-icons/bs'
const Introduction = () => {
  return (
    <Wrapper>
      <div class="slideUp">
        <div
          clas="introduction"
          style={{ color: "#041121", marginTop: "750px" }}
        >
          <h1 style={{ marginTop:"-250px",marginRight: "550px", fontSize: "4.2rem", textShadow: '2px 2px #ff0000', boxSizing: 'border-box' }}>
            Software developer &<br></br> programming analyst
          </h1>
        </div>
      </div>
      <div class="slideRight">
        Based in Toronto, Canada.
        <br />
        Student in designing and developing state-of-the-art websites.
      </div>
      <div
        class="slideUp"
        style={{ animation: "slideUp ease 4.4s forwards 2.2s" }}
      >
        <div
          class="circle-container"
          style={{ marginLeft: "900px", marginTop: "-200px" }}
        >
          <div class="circle" style={{ animationDelay: "0s" }}>
            <div class="circle" style={{ animationDelay: "-1s" }}>
              <div class="circle" style={{ animationDelay: "-2s" }}>
                <div class="circle" style={{ animationDelay: "-3s" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="slideUp"
        style={{ animation: "slideUp ease 4.4s forwards 2.2s" }}
      >
        <AwesomeButton
          type="secondary"
          style={{
            width: "100px",
            height: "70px",
            marginLeft: "854px",
            marginTop: "-180px",
          }}
        >
          RESUME
        </AwesomeButton>
      </div>

      <div class="arrow"><BsChevronDoubleDown/></div>
    </Wrapper>
  );
};

export default Introduction;
