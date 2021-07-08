import React from "react";
import "../index.css";
import "../css/bootstrap.min.css";
import "../css/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logo from "../images/logo.png";
import s1 from "../images/slider/s1.jpg";
import s2 from "../images/slider/s2.jpg";
import s3 from "../images/slider/s3.jpg";
import s4 from "../images/slider/s4.jpg";

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
          marginTop: "3rem",
        }}
        className="m-20 mb-4 sm:mb-5"
      />
      <div className="row" style={{ textAlign: "center" }}>
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

      <Carousel>
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
      </Carousel>
    </div>
  );
}

export default Home;
