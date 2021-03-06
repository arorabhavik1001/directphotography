import React, { useState } from "react";
import "../index.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-grid.css";
import "../css/bootstrap-grid.min.css";
import "../css/bootstrap.css";
import "../css/bootstrap.rtl.css";
import "../css/bootstrap.rtl.min.css";
import "../css/bootstrap-utilities.rtl.min.css";
import "../css/bootstrap-utilities.rtl.css";
import "../css/bootstrap-grid.rtl.min.css";
import "../css/bootstrap-grid.rtl.css";
import "../css/bootstrap-utilities.min.css";
import "../css/bootstrap-utilities.css";
import "../css/bootstrap-reboot.rtl.min.css";
import "../css/bootstrap-reboot.rtl.css";
import "../css/bootstrap-reboot.min.css";
import "../css/bootstrap-reboot.css";
import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from "../images/logo.png";
import s1 from "../images/slider/s1.jpg";
import s2 from "../images/slider/s2.jpg";
import s3 from "../images/slider/s3.jpg";
import s4 from "../images/slider/s4.jpg";
import m1 from "../images/home2/m1.jpg";
import m2 from "../images/home2/m2.jpg";
import m3 from "../images/home2/m3.jpg";
import rLogo from "../images/rLogo.png";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "fade-carousel";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

// import Carousel from "react-bootstrap/Carousel";

function Home() {
  // window.onresize = function(event) {
  //   // eslint-disable-next-line no-restricted-globals
  //   location.reload()}
  const [name, setName] = useState("");
  const [isMModalOpen, setIsMModalOpen] = useState(false);
  const divStyle = {
    width: "95%",
    height: window.innerWidth >= 768 ? "35vw" : "55vw",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const imageStyle = {
    height: "100%",
    width: "auto",
    justifySelf: "center",
  };
  return (
    <>
      <div className="App container">
        {/* <style>{'body {background-color:#ececec}'}</style> */}
        <div className="mobile-nav">
          {/* <MenuIcon onClick={() => setIsModalOpen(true)} /> */}
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              {/* <Button onClick={() => setIsMModalOpen(true)}>{anchor}</Button> */}
              <MenuIcon onClick={() => setIsMModalOpen(true)} />
              <SwipeableDrawer
                anchor={anchor}
                open={isMModalOpen}
                onClose={() => setIsMModalOpen(false)}
              >
                <div className="row" style={{ textAlign: "center" }}>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem", paddingTop: ".5rem" }}
                  >
                    <a
                      href="/"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none" }}
                    >
                      HOME
                    </a>
                  </div>

                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/stories"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none" }}
                    >
                      STORIES
                    </a>
                  </div>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/presets"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none" }}
                    >
                      PRESETS
                    </a>
                  </div>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/about"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none" }}
                    >
                      ABOUT
                    </a>
                  </div>
                  <div
                    className="col-lg col-md"
                    style={{ paddingBottom: ".5rem" }}
                  >
                    <a
                      href="/booknow"
                      className="text-gray-500 hover:no-underline hover:text-black"
                      style={{ textDecoration: "none" }}
                    >
                      BOOK NOW
                    </a>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "gray",
                      height: "2.5rem",
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                    onClick={() => setIsMModalOpen(false)}
                  >
                    Close
                  </button>
                  {/* <Button onClick={() => setIsMModalOpen(false)}>Close</Button> */}
                </div>
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
        <a href="/">
          <img
            src={rLogo}
            alt="logo"
            style={{
              height: "6.3rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1.5rem",
            }}
            className="m-20 mb-4 sm:mb-5"
          />
        </a>
        <div
          className="row wrap-nav"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/"
              className="text-gray-500 hover:no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              HOME
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/stories"
              className="text-gray-500 hover:no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              STORIES
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/presets"
              className="text-gray-500 hover:no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              PRESETS
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/about"
              className="text-gray-500 hover:no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              ABOUT
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/booknow"
              className="text-gray-500 hover:no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* <Carousel>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={s1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={s2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={s3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={s4} alt="Third slide" />
        </Carousel.Item>
      </Carousel> */}
        {/* <div className="inline-flex hideMe"> */}
        <Carousel divStyle={divStyle} delay={4000}>
          <div style={imageStyle}>
            <img
              src={s3}
              style={{ width: "100%", height: "auto" }}
              alt="image 1"
            />
          </div>
          <div style={imageStyle}>
            <img
              src={s2}
              style={{ width: "100%", height: "auto" }}
              alt="image 2"
            />
          </div>
          <div style={imageStyle}>
            <img
              src={s1}
              style={{ width: "100%", height: "auto" }}
              alt="image 3"
            />
          </div>
          <div style={imageStyle}>
            <img
              src={s4}
              style={{ width: "100%", height: "auto" }}
              alt="image 4"
            />
          </div>
        </Carousel>
        {/* </div> */}

        <div className="text-center text-gray-500">
          <h2 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
            "YOU ENJOY. WE CAPTURE IT FOR YOU.???
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Our sole purpose is to help you capture some of your most important
            moments of happiness from your life. So that you can enjoy a good
            walk down the memory lane, later in your life.
          </p>
          <p style={{ marginBottom: "3rem" }}>
            Our preference is not the Money but your Satisfaction.
          </p>
          <h2 style={{ fontWeight: "300" }}>
            WE CREATE THE BEAUTIFUL WORLD OF MEMORIES.
          </h2>
        </div>

        <div
          className="row"
          style={{ marginTop: "3rem", marginBottom: "5rem" }}
        >
          <div className="col-4">
            <img
              src={m1}
              alt="pic1"
              className="transition duration-150 transform hover:scale-110"
            />
          </div>
          <div className="col-4">
            <img
              src={m2}
              alt="pic2"
              className="transition duration-150 transform hover:scale-110"
            />
          </div>
          <div className="col-4">
            <img
              src={m3}
              alt="pic3"
              className="transition duration-150 transform hover:scale-110"
            />
          </div>
        </div>
      </div>
      <footer>
        <div class="footer1" style={{ width: "100%", paddingTop: "2rem" }}>
          <div class="container ">
            <div className="row" style={{ marginLeft: "auto", marginRight: "auto" }}>
              <div
                className="col-lg-6 col-md-6 col-sm-12 items-center"
                style={{ alignItems: "center" }}
              >
                <h2 className="text-gray-500">Our Services</h2>
                <p style={{ fontSize: "1.2rem" }} className="text-gray-500">
                  <DoubleArrowIcon />
                  Pre Wedding Photography
                </p>
                <p style={{ fontSize: "1.2rem" }} className="text-gray-500">
                  <DoubleArrowIcon />
                  Luxury Wedding Photography
                </p>
                <p style={{ fontSize: "1.2rem" }} className="text-gray-500">
                  <DoubleArrowIcon />
                  Destination Wedding Photography
                </p>
                <p style={{ fontSize: "1.2rem" }} className="text-gray-500">
                  <DoubleArrowIcon />
                  Model Portfolio
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                <h2 className="text-gray-500">Contact Us</h2>
                <p style={{ fontSize: "1rem" }} className="text-gray-500">
                  <PhoneIcon style={{ marginRight: "5px" }} />
                  <a href="tel:+919643926949">
                    +91-9643926949
                  </a>,&nbsp;
                  <a href="tel:+919315404993">
                    9315404993
                  </a>
                </p>
                <p style={{ fontSize: "1rem" }} className="text-gray-500">
                  <EmailIcon style={{ marginRight: "5px" }} />
                  <a href="mailto:info.directphotography@gmail.com">
                    info.directphotography@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="container" style={{ textAlign: "center" }}>
            <p
              style={{ margin: "0px", padding: "10px", fontSize: ".9rem" }}
              className="text-gray-500"
            >
              Copyright ??? 2021 Direct Photography. All Rights Reserved. Created by{" "}
              <a
                href="https://www.instagram.com/bhavikar.1001/"
                target="_blank"
                rel="noreferrer"
              >
                Bhavik Arora
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
