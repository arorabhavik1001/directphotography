import React, {useState} from "react";
import ReadMoreAndLess from "react-read-more-less";
import logo from "../images/logo.png";
import a1 from "../images/about/a1.JPG";
import n2 from "../images/about/n2.png";
import ea1 from "../images/about/ea1.png";
import vikase1 from "../images/about/vikase1.png";
import beenae1 from "../images/about/beenae1.png";
import anniee1 from "../images/about/anniee1.png";
import hitesh from "../images/about/hitesh.jpg";
import ankit from "../images/about/ankit.jpg";
import rLogo from "../images/rLogo.png";
import a2 from "../images/about/a2.jpeg";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

function About() {
  const [isMModalOpen, setIsMModalOpen] = useState(false);
  return (
    <>
      <div className="container">
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
            <div className="col-lg col-md" style={{ paddingBottom: ".5rem", paddingTop: ".5rem" }}>
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
          <button style={{ width:"100%", backgroundColor:"gray", height:"2.5rem", fontSize:"1.2rem", color:"white" }}onClick={() => setIsMModalOpen(false)}>Close</button>
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
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/"
              className="text-gray-500 no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              HOME
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/stories"
              className="text-gray-500 no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              STORIES
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/presets"
              className="text-gray-500 no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              PRESETS
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/about"
              className="text-gray-500 no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              ABOUT
            </a>
          </div>
          <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
            <a
              href="/booknow"
              className="text-gray-500 :no-underline hover:text-black"
              style={{ textDecoration: "none" }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500">
          {/* Welcome to Direct Photography. It is a joint venture by Vimal Sharma and Vimal Sharma. Our aim is to provide a better and next level
          photography service to everyone's one in a lifetime event, "Wedding".
          At "Direct Photography", we want to eradicate the In-between
          vendors and directly contact the client to give a better service. We
          also make wedding films. The world is constantly changing. So we want
          to collect today's memories and give back to the people so they can go
          back down the memory lane and relive their memories. */}

          <h1 style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
            "ABOUT US???
          </h1>
          <p
            style={{ marginBottom: "2rem", fontSize: "1.2rem" }}
            className="text-justify"
          >
            Welcome to Direct Photography. It is a joint venture by Naveen Pal
            and Vimal Sharma. Our aim is to provide a better and next level
            photography service to everyone's one in a lifetime event,
            "Wedding". At "Direct Photography", we want to eradicate the
            In-between vendors and directly contact the client to give a better
            service. We also make wedding films. The world is constantly
            changing. So we want to collect today's memories and give back to
            the people so they can go back down the memory lane and relive their
            memories.
          </p>
          <h2 className="mb-4">Our Team</h2>
          <div className="row g-2 g-lg-3 justify-content-center mb-3">
            <div className="col-lg-5 col-sm-12 col-md-5 profile my-3 mx-3">
              <div className="p-3">
                <img
                  src={n2}
                  className="transition duration-150 transform hover:scale-110 pb-3 "
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h5>Naveen</h5>
                <p>Founder &amp; Cinematographer</p>
                <ReadMoreAndLess
                  // ref={ReadMore}
                  className="read-more-content"
                  charLimit={150}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  Videography is just like a memory capturer of Happiness. Our
                  aim is to help everyone, all over India, capture their one of
                  the most important events in life, Wedding. We want to provide
                  high quality Videography at satisfactory prizes without
                  compromising the standard of service. Many videographers in
                  India, provide average quality services at high prices. But at
                  Direct Photography, we want to provide the best service at
                  affordable charges.
                </ReadMoreAndLess>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 col-md-5 profile my-3 mx-3">
              <div className="p-3">
                <img
                  src={ea1}
                  className="transition duration-150 transform hover:scale-110 pb-3"
                  style={{
                    width: "50%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h5>Vimal</h5>
                <p>Co-Founder &amp; Photographer</p>
                <ReadMoreAndLess
                  // ref={ReadMore}
                  className="read-more-content"
                  charLimit={150}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  Hi there! I am Vimal Sharma. My journey begins from doing
                  "Photography" as an assistant in 2006. Faced a ton of
                  challenges but I had that inner desire to do something big.
                  Following that, my life took a turning point and I found this
                  company called "Direct Photography".
                </ReadMoreAndLess>
              </div>
            </div>
          </div>
          <div className="row g-2 g-lg-3 justify-content-center mb-5">
            <div className="col-lg-3 col-sm-12 col-md-3 profile my-3 mx-3">
              <div className="p-3">
                <img
                  src={vikase1}
                  className="transition duration-150 transform hover:scale-110 pb-3 "
                  style={{
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h5>Vikas Wadhwa</h5>
                <p>Cinematographer &amp; Editor</p>
                <ReadMoreAndLess
                  // ref={ReadMore}
                  className="read-more-content"
                  charLimit={80}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  Storyteller by heart &amp; soul, Vikas comes with more than 10
                  years of experience in film making. Jack of all trade. He is
                  the creative force behind the Candid Capture. Creative in
                  every aspect,Apart from the director, he is a producer and
                  best in class editor. He is among those new tribe of video
                  editors who are credited to bridge the fiction and non-film
                  style of video editing &amp; film making. A tech nerd by
                  nature, he is proficient in photoshop, VFX and Cinematography
                  too.
                </ReadMoreAndLess>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-3 profile my-3 mx-3">
              <div className="p-3">
                <img
                  src={beenae1}
                  className="transition duration-150 transform hover:scale-110 pb-3"
                  style={{
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h5>Beena Nankani</h5>
                <p>Candid Photographer</p>
                <ReadMoreAndLess
                  // ref={ReadMore}
                  className="read-more-content"
                  charLimit={80}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  Creativity, perfection and patience are what defines Beena.
                  She understands the nuances of the visual medium and is an
                  expert in capturing the visual that connects instantly with
                  the viewers. She pays attention to every minute detail and
                  combines unique camera techniques to create stunning shots on
                  the screen. Her photos are pure work of art.
                </ReadMoreAndLess>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-3 profile my-3 mx-3">
              <div className="p-3">
                <img
                  src={anniee1}
                  className="transition duration-150 transform hover:scale-110 pb-3"
                  style={{
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h5>Annie Nathan</h5>
                <p>Candid Photographer</p>
                {/* <ReadMoreAndLess
                  // ref={ReadMore}
                  className="read-more-content"
                  charLimit={80}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  Videography is just like a memory capturer of Happiness. Our
                  aim is to help everyone, all over India, capture their one of
                  the most important events in life, Wedding. We want to provide
                  high quality Videography at satisfactory prizes without
                  compromising the standard of service. Many videographers in
                  India, provide average quality services at high prices. But at
                  Direct Photography, we want to provide the best service at
                  affordable charges.
                </ReadMoreAndLess> */}
              </div>
            </div>
          </div>
          <div className="row g-2 g-lg-3 justify-content-center mb-5">
            <div className="col-lg-3 col-sm-12 col-md-3 profile my-3 mx-3">
              <div className="p-3">
                <img
                  src={hitesh}
                  className="transition duration-150 transform hover:scale-110 pb-3"
                  style={{
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h5>Hitesh Arora</h5>
                <p>Photographer</p>
                {/* <ReadMoreAndLess
                  // ref={ReadMore}
                  className="read-more-content"
                  charLimit={80}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  Videography is just like a memory capturer of Happiness. Our
                  aim is to help everyone, all over India, capture their one of
                  the most important events in life, Wedding. We want to provide
                  high quality Videography at satisfactory prizes without
                  compromising the standard of service. Many videographers in
                  India, provide average quality services at high prices. But at
                  Direct Photography, we want to provide the best service at
                  affordable charges.
                </ReadMoreAndLess> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-md-3 profile my-3 mx-3">
              <div className="p-3">
                <img
                  src={ankit}
                  className="transition duration-150 transform hover:scale-110 pb-3"
                  style={{
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h5>Ankit Tejaniya</h5>
                <p>Photographer</p>
                {/* <ReadMoreAndLess
                  // ref={ReadMore}
                  className="read-more-content"
                  charLimit={80}
                  readMoreText="Read more"
                  readLessText="Read less"
                >
                  Videography is just like a memory capturer of Happiness. Our
                  aim is to help everyone, all over India, capture their one of
                  the most important events in life, Wedding. We want to provide
                  high quality Videography at satisfactory prizes without
                  compromising the standard of service. Many videographers in
                  India, provide average quality services at high prices. But at
                  Direct Photography, we want to provide the best service at
                  affordable charges.
                </ReadMoreAndLess> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer">
          <div class="container" style={{ textAlign: "center" }}>
            <p
              style={{ margin: "0px", padding: "10px", fontSize: ".9rem" }}
              className="text-gray-500"
            >
              Copyright ??? 2021 Direct Photography. All Rights Reserved. Created
              by{" "}
              <a
                href="https://www.instagram.com/bhavikar.1001/"
                target="_blank"
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

export default About;
