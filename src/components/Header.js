import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Wrapper from "../assets/wrappers/Dashboard";

const Header = () => {
  return (
    <Wrapper>
      <div
        class="slideDown"
        style={{ color: "#F4F4F4", width: "100%", paddingBottom: "0px", overflow: 'hidden', zIndex: '1'}}
      >
        <header id="header" style={{ color: "F4F4F4" }}>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <>
            <Navbar bg="dark" variant="dark">
              <Container style={{ marginTop: "-5px" }}>
                <Navbar.Brand href="/" style={{ marginTop: "10px" }}>
                  {" "}
                  Rolandos Georgoulis
                </Navbar.Brand>
                <Nav className="me-auto" style={{ marginTop: "25px" }}>
                  <Nav.Link href="/" style={{ marginLeft: "620px" }}>
                    {" "}
                    Home
                  </Nav.Link>
                  <Nav.Link href="/About">About</Nav.Link>
                  <Nav.Link href="/Portfolio" style={{ marginRight: "60px" }}>
                    Portfolio
                  </Nav.Link>

                  {/*<a
                    href="http://facebook.com"
                    class="fa fa-facebook"
                    style={{ marginTop: "-12px" }}
                    > </a>*/}
                  {/*<a
                    href="http://twitter.com"
                    class="fa fa-twitter"
                    style={{ marginTop: "-12px" }}
                  > </a>*/}
                  <a
                    href="https://www.linkedin.com/in/rolandos-georgoulis-0ab003258/"
                    class="fa fa-linkedin"
                    style={{ marginTop: "-12px" }}
                  > </a>
                  {/*<a
                    href="http://instagram.com"
                    class="fa fa-instagram"
                    style={{ marginTop: "-12px" }}
                > </a>*/}
                </Nav>
              </Container>
            </Navbar>
          </>
        </header>
      </div>
    </Wrapper>
  );
};

export default Header;

// <div class="slideDown" style={{ color: "#F4F4F4", top : "-20px"}}> FOR ROLANDOS GEORGOULIS
// <div class="slideDown" style={{ color: "#F4F4F4", fontSize:"18px", width:"0px", marginLeft:"20px",marginRight:"0px", marginTop:"-30px",top : "-20px" }}>
// FOR HOME ABOUT AND PORTFOLIO ^^^^
//   style={{ color: "#F4F4F4", fontSize:"18px", width:"0px", marginLeft:"-20px", marginTop:"-40px" }}>
// FOR ICONS ^^^^
