import React from "react";
import "../index.css";
import "../css/splash.css";
import "../css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import s1 from "../images/splashScreen/s1.jpg";
import s1 from "../images/splashScreen/s1.png";
import s2 from "../images/splashScreen/s2.jpg";
// import s3 from "../images/splashScreen/s3.jpg";
import s3 from "../images/splashScreen/s3.png";
// import s4 from "../images/splashScreen/s4.jpg";
import s4 from "../images/splashScreen/s4.png";

function Splash() {
  return (
    <div className="main">
      <style>{'body {background-color:black}'}</style>
      <div className="text-center centerr">
      <div className="row pb-10">
        <div className="col-lg-3 col-md-4 col-sm-6 hidden sm:inline-flex pl-0 pr-0">
          <img src={s3} alt="pic3" className="transition duration-150 transform hover:scale-110" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 hidden sm:inline-flex pl-0 pr-0">
          <img src={s2} alt="pic2" className="transition duration-150 transform hover:scale-110 " />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pl-0 pr-0">
          <img src={s4} alt="pic4" className="transition duration-150 transform hover:scale-110" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 pl-0 pr-0">
          <img src={s1} alt="pic1" className="transition duration-150 transform hover:scale-110" />
        </div>
      </div>
      <div className="p-4">
      <p style={{fontSize:"1.2rem"}} className="text-gray-500 text-justify">
        A wedding is a validation coupled with the showcase of Love inclusive of
        various events with exotic venues, food, guests, dresses, jewellery and
        so on- What if it could never be recorded?
      </p>
      <p className="text-white pb-2">
        A chronology of a couple’s journey where they vow together to be One.
      </p>
      <Link to="/home" className="btn bg-white  transition duration-150 transform hover:scale-110">
        Enter
      </Link>
      </div>
      </div>
    </div>
  );
}

export default Splash;