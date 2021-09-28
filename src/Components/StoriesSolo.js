import React, { useState } from "react";
import logo from "../images/logo.png";
import bg from "../images/home2/bg.jpg";
import rLogo from "../images/rLogo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

function StoriesSolo({ contents }) {
  const [isMModalOpen, setIsMModalOpen] = useState(false);
  //   contents.images.forEach((name) => items.push({ src: `${name}` }))
  return (
    <div className="container">
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
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/"
            className="text-gray-500 hover:no-underline"
            style={{ textDecoration: "none" }}
          >
            HOME
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/stories"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            STORIES
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/presets"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            PRESETS
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/about"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            ABOUT
          </a>
        </div>
        <div className="col-lg col-md" style={{ paddingBottom: ".5rem" }}>
          <a
            href="/booknow"
            className="text-gray-500"
            style={{ textDecoration: "none" }}
          >
            BOOK NOW
          </a>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mb-4 mt-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ height: "40px", marginRight: "15px", display: "inline"}}
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            <h3 className="coupleName soloHeading" style={{ textAlign: "center" }}>
              Couple Name: <bold>{contents.coupleName}</bold>
            </h3>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ height: "40px", marginLeft: "15px", display: "inline"}}
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 pr-0">
            <img
              src={contents.images[0]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
                padding: "1.25px",
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-6 pl-0">
            <img
              src={contents.images[2]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
                padding: "1.25px",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{padding: "1.25px"}}>
            <img
              src={contents.images[1]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto"
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4" style={{ padding: "1.25px" }}>
            <img
              src={contents.images[0]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-4" style={{ padding: "1.25px" }}>
            <img
              src={contents.images[0]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-4" style={{ padding: "1.25px" }}>
            <img
              src={contents.images[0]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6" style={{ padding: "1.25px" }}>
            <img
              src={contents.images[0]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-6" style={{ padding: "1.25px" }}>
            <img
              src={contents.images[0]}
              className="solo__images"
              style={{
                height: "auto",
                width: "100%",
                marginRight: "auto",
                marginLeft: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoriesSolo;
