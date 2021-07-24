import React, {useState} from "react";
import logo from "../images/logo.png";
import bg from "../images/splashScreen/bg.png"
import rLogo from "../images/rLogo.png"
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h5>We have recieved your booking request.</h5>
        <p>
          We have also sent you a confirmation email. Our team would contact you
          at the earliest to discuss further details.
        </p> */}
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-sm-4 col-md" style={{ paddingBottom: ".5rem" }}>
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
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ComingSoon() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container" style={{backgroundImage:`url(${logo})`}}>
      
      <style>{`body {background-image:url(${bg}); background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;}`}</style>
      <MyVerticallyCenteredModal
          show={isModalOpen}
          onHide={() => setIsModalOpen(false)}
        />
        <div className="mobile-nav">
          <MenuIcon onClick={() => setIsModalOpen(true)} />
        </div>
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
