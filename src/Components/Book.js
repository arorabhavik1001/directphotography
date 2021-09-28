import React, { useState } from "react";
import logo from "../images/logo.png";
import rLogo from "../images/rLogo.png";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventIcon from "@material-ui/icons/Event";
import dotenv from "dotenv";
import MenuIcon from "@material-ui/icons/Menu";
import Modal from "react-bootstrap/Modal";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
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

function Book() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setMail] = useState("");
  const [eventName, setEventName] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMModalOpen, setIsMModalOpen] = useState(false);
  const [numberOfIter, setNumberOfIter] = useState([0]);
  //   const [eventDetails, setEventDetails] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  var options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // var dateToBeSent = startDate.toLocaleDateString("en-IN", options);
  const submitRequest = (event) => {
    event.preventDefault();
    setIsModalOpen(true);

    var newList = []
    let names = document.getElementsByName('eventname');
    names.forEach((name) => {
      newList.push(name.value)
    })
    var newDateList = []
    let dates = document.getElementsByName('eventdate');
    dates.forEach((date) => {
      newDateList.push(date.value)
    })
    
    db.collection("bookings")
      .add({
        name: event.target.name.value,
        number: event.target.number.value,
        email: event.target.email.value,
        eventName: newList,
        eventDate: newDateList,
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

  const addIter = () => {
    const numberToBeAdded = numberOfIter[numberOfIter.length - 1] +1;
    setNumberOfIter([...numberOfIter, numberToBeAdded])
  }

  return (
    <>
      <div className="container">
        <MyVerticallyCenteredModal
          show={isModalOpen}
          onHide={() => setIsModalOpen(false)}
        />
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
                // required
                //   value={email}
                //   onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}

            <div>
              {numberOfIter.map((iterN) => (
                <div>
                  <div
                    className="col-lg-4 col-sm-12 col-md-6"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  >
                    <Form.Label className="text-gray-500">
                      Event Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      // placeholder="Enter Event Name"
                      name="eventname"
                      //   value={eventName}
                      // onChange={(e) => setEventName([...eventName, e.target.value])}
                      className={`mb-4 eventname eventname${iterN}`}
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
                    <Form.Label className="text-gray-500">
                      Event Date
                    </Form.Label>
                    <div
                      
                    >
                      {/* <EventIcon
                        style={{ marginRight: "5px", color: "gray" }}
                      /> */}
                      {/* <DatePicker
                        dateFormat="d/M/y"
                        // showTimeSelect
                        selected={startDate}
                        style={{ color: "gray" }}
                        onChange={(date) => setStartDate(date)}
                      /> */}
                      <Form.Control
                      type="date"
                      // placeholder="Enter Event Name"
                      name="eventdate"
                      // style={{border:"none"}}
                      //   value={eventName}
                      // onChange={(e) => setEventName([...eventName, e.target.value])}
                      className={`eventdate eventdate${iterN}`}
                    />
                    </div>
                  <hr className="mt-4 mb-3" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500">Add more Events</p>
            <Button style={{color:"black", backgroundColor:"lightgray", border:"1px solid darkgray", borderRadius:"12px", fontSize:"1.4rem"}} onClick={addIter}>+</Button>
          </Form.Group>

          <Button variant="dark" className="mb-5" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Book;
