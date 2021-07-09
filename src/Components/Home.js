import React from "react";
import "../index.css";
import "../css/bootstrap.min.css";
import "../css/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import logo from "../images/logo.png";
import s1 from "../images/slider/new size/s1.png";
import s2 from "../images/slider/new size/s2.png";
import s3 from "../images/slider/new size/s3.png";
import s4 from "../images/slider/new size/s4.png";
import m1 from "../images/home2/m1.jpg";
import m2 from "../images/home2/m2.jpg";
import m3 from "../images/home2/m3.jpg";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="App container">
      <img
        src={logo}
        alt="logo"
        style={{
          height: "7rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "1.5rem",
        }}
        className="m-20 mb-4 sm:mb-5"
      />
      <div
        className="row"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a href="/home" className="text-gray-500 hover:no-underline">
            HOME
          </a>
        </div>
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a href="/stories" className="text-gray-500">
            STORIES
          </a>
        </div>
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a href="/presets" className="text-gray-500">
            PRESETS &amp; LUTS
          </a>
        </div>
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a href="/about" className="text-gray-500">
            ABOUT
          </a>
        </div>
        <div className="col col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a href="/booknow" className="text-gray-500">
            BOOK NOW
          </a>
        </div>
      </div>

      {/* <Carousel>
        <div>
          <img src={s1} />
        </div>
        <div>
          <img src={s2} />
        </div>
        <div>
          <img src={s3} />
        </div>
        <div>
          <img src={s4} />
        </div>
      </Carousel> */}

      <Carousel>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src={s1} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={s2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={s3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={s4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="text-center text-gray-500">
        <h2 style={{ marginTop: "2.5rem", marginBottom: "2rem"}}>"YOU FEEL. I FOCUS. WE FRAME”</h2>
        <p style={{marginBottom:"1.5rem"}}>
          A wedding is a validation coupled with the showcase of Love inclusive
          of various events with exotic venues, food, guests, dresses, jewellery
          and so on- What if it could never be recorded?
        </p>
        <p style={{marginBottom:"3rem"}}>A chronology of a couple’s journey where they vow together to be One.</p>
        <h2>WE ARE CREATING FICTION OUT OF REALITY.</h2>
      </div>

      <div className="row" style={{marginTop:"3rem", marginBottom:"5rem"}}>
        <div className="col-4"><img src={m1} alt="pic1" className="transition duration-150 transform hover:scale-110" /></div>
        <div className="col-4"><img src={m2} alt="pic2" className="transition duration-150 transform hover:scale-110" /></div>
        <div className="col-4"><img src={m3} alt="pic3" className="transition duration-150 transform hover:scale-110" /></div>
      </div>
    </div>
  );
}

export default Home;
