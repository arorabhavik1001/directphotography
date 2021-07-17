import React from "react";
import logo from "../images/logo.png";
import a1 from "../images/about/a1.JPG";
import a2 from "../images/about/a2.jpeg";

function About() {
  return (
    <>
    <div className="container">
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
        className="row hidden"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/home"
            className="text-gray-500 hover:no-underline hover:text-black"
          >
            HOME
          </a>
        </div>
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/stories"
            className="text-gray-500 hover:no-underline hover:text-black"
          >
            STORIES
          </a>
        </div>
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/presets"
            className="text-gray-500 hover:no-underline hover:text-black"
          >
            PRESETS &amp; LUTS
          </a>
        </div>
        <div className="col-6 col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/about"
            className="text-gray-500 hover:no-underline hover:text-black"
          >
            ABOUT
          </a>
        </div>
        <div className="col col-lg col-mg" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/booknow"
            className="text-gray-500 hover:no-underline hover:text-black"
          >
            BOOK NOW
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500">
        <img
          src={a1}
          className="transition duration-150 transform hover:scale-110 "
          style={{
            width: "30%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "60px",
          }}
        />
        <h2 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
          "ABOUT ME and MY WORK”
        </h2>
        <p
          style={{ marginBottom: "2.5rem", fontSize: "1.2rem" }}
          className="text-justify"
        >
          Hi there! I am Vimal Sharma. My journey begins from doing
          "Photography" as an assistant in 2006. Faced a ton of challenges but I
          had that inner desire to do something big. Following that, my life
          took a turning point and I started this company called "Direct
          Photography". Our aim is to provide a better and next level
          photography service to everyone's one in a lifetime event, "Wedding".
          "Direct" &#8594; means that we want to eradicate the In-between
          vendors and directly contact the client to give a better service. We
          also make wedding films. The world is constantly changing. So we want
          to collect today's memories and give back to the people so they can go
          back down the memory lane and relive their memories.
        </p>
      </div>
    </div>
      <footer>
        <div class="footer">
          <div class="container" style={{textAlign: 'center'}}>
          <p style={{margin:"0px", padding:"10px", fontSize:".9rem" }} className="text-gray-500 font-mono">Copyright Ⓒ 2021 Direct Photography. All Rights Reserved. Created by <a href="https://www.instagram.com/bhavikar.1001/" target="_blank">Bhavik Arora</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}  
  
export default About;
