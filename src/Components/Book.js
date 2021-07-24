import React, { useState } from "react";
import logo from "../images/logo.png";
import rLogo from "../images/rLogo.png"
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventIcon from "@material-ui/icons/Event";
import dotenv from 'dotenv';
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-bootstrap/Modal";
dotenv.config();

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
        <Modal.Title id="contained-modal-title-vcenter">
          Booking Request Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>We have recieved your booking request.</h5>
        <p>
          We have also sent you a confirmation email. Our team would contact you
          at the earliest to discuss further details.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MenuModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Menu
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h5>We have recieved your booking request.</h5>
        <p>
          We have also sent you a confirmation email. Our team would contact you
          at the earliest to discuss further details.
        </p> */}
        <div
          className="row"
          style={{ textAlign: "center"}}
        >
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

function Book() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY)
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setMail] = useState("");
  const [eventName, setEventName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  //   const [eventDetails, setEventDetails] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var dateToBeSent = startDate.toLocaleDateString("en-IN", options);
  console.log(dateToBeSent);
  const submitRequest = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
    //   alert(event.target.birthday.value)
    const formData = {
      name,
      number,
      email,
      eventName,
      //   eventDetails,
    };
    //  console.log(event.target.name.value)
    db.collection("bookings")
      .add({
        name: event.target.name.value,
        number: event.target.number.value,
        email: event.target.email.value,
        eventName: event.target.eventName.value,
        eventDate: dateToBeSent,
        // eventDetails: event.target.eventDetails.value,
        time: new Date(),
      })
      .then((result) => console.log("Booking Requested"))
      .catch((err) => alert(err.message));

    sendEmail(event);

    document.getElementById("newForm").reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sdet5ho",
        "template_nak9js7",
        e.target,
        "user_LtpiPM3ciXGrC7RB5T795"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <div className="container">
      <MyVerticallyCenteredModal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      />
      <MenuModal
        show={isMenuModalOpen}
        onHide={() => setIsMenuModalOpen(false)}
      />
      <div className="mobile-nav">
          <MenuIcon onClick={() => setIsMenuModalOpen(true)} />
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
      <Form className="text-center" id="newForm" onSubmit={submitRequest}>
        <Form.Group className="mb-3 pt-2" controlId="formBasicEmail">
          <div
            className="col-lg-4 col-sm-12 col-md-6"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Form.Label className="text-gray-500">Full Name</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter name"
              className="mb-4"
              name="name"
              required
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-6"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Form.Label className="text-gray-500">Contact Number</Form.Label>
            <Form.Control
              type="number"
              // placeholder="Enter Mobile no."
              className="mb-4"
              name="number"
              required
              //   value={number}
              //   onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div
            className="col-lg-4 col-sm-12 col-md-6"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Form.Label className="text-gray-500">Email</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter Email"
              className="mb-4"
              name="email"
              required
              //   value={email}
              //   onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          <div
            className="col-lg-4 col-sm-12 col-md-6"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Form.Label className="text-gray-500">Event Name</Form.Label>
            <Form.Control
              type="text"
              // placeholder="Enter Event Name"
              name="eventName"
              //   value={eventName}
              //   onChange={(e) => setEventName(e.target.value)}
              className="mb-4"
            />
            <div></div>
          </div>
          {/* <div className="col-4">
            <Form.Label className="text-gray-500">Event Details</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Event Details"
              name="eventDetails"
              //   value={eventDetails}
              //   onChange={(e) => setEventDetails(e.target.value)}
            />
          </div> */}
          <div
            className="col-lg-4 col-sm-12 col-md-6"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Form.Label className="text-gray-500">Event Date</Form.Label>
            <div
              style={{
                border: "1px solid #ced4da",
                borderRadius: "5px",
                display: "flex",
                padding: "8px",
              }}
            >
              <EventIcon style={{ marginRight: "5px", color: "gray" }} />
              <DatePicker
                dateFormat="d/M/y"
                // showTimeSelect
                selected={startDate}
                style={{ color: "gray" }}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </Form.Group>

        <Button variant="dark" className="mt-4 mb-5" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
    </>
  );
}

export default Book;
