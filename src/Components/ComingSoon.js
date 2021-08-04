import React, {useState} from "react";
import logo from "../images/logo.png";
import bg from "../images/home2/bg.jpg"
import rLogo from "../images/rLogo.png"
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";


function ComingSoon() {
  const [isMModalOpen, setIsMModalOpen] = useState(false);
  return (
    <div className="container" style={{backgroundImage:`url(${logo})`}}>
      
      <style>{`body {background-image:url(${bg}); background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;}`}</style>
      
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
              href="/home"
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
        <a href="/home">
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
          <a href="/home" className="text-gray-500 hover:no-underline"
          style={{textDecoration:"none"}}>
            HOME
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a href="/stories" className="text-gray-500"
          style={{textDecoration:"none"}}>
            STORIES
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a href="/presets" className="text-gray-500"
          style={{textDecoration:"none"}}>
            PRESETS
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a href="/about" className="text-gray-500"
          style={{textDecoration:"none"}}>
            ABOUT
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a href="/booknow" className="text-gray-500"
          style={{textDecoration:"none"}}>
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
