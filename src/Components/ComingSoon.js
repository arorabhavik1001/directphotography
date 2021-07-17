import React from "react";
import logo from "../images/logo.png";
import bg from "../images/splashScreen/bg.png"

function ComingSoon() {
  return (
    <div className="container" style={{backgroundImage:`url(${logo})`}}>
      <style>{`body {background-image:url(${bg}); background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;}`}</style>
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
      <div className="text-center text-gray-500">
        <h2 style={{ marginTop: "2.5rem", marginBottom: "2rem", fontSize:"4rem",  }}>"COMING SOON”</h2>
      </div>
    </div>
  );
}

export default ComingSoon;
