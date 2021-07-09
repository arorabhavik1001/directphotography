import React, { useState } from "react";
import logo from "../images/logo.png";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase";
import emailjs from "emailjs-com";

function Book() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setMail] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDetails, setEventDetails] = useState("");

  const submitRequest = (event) => {
    event.preventDefault();
    const formData = {
      name,
      number,
      email,
      eventName,
      eventDetails,
    };
    //  console.log(event.target.name.value)
    db.collection("bookings")
      .add({
        name: event.target.name.value,
        number: event.target.number.value,
        email: event.target.email.value,
        eventName: event.target.eventName.value,
        eventDetails: event.target.eventDetails.value,
        time: new Date(),
      })
      .then((result) => console.log("done"))
      .catch((err) => alert(err.message));

    sendEmail(event);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tzosanv",
        "template_3ipw5um",
        e.target,
        "user_IMRNPGgtqZXUvUENluqlh"
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
      <Form className="text-center" onSubmit={submitRequest}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="col-4">
            <Form.Label className="text-gray-500">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              className="mb-4"
              name="name"
              //   value={name}
              //   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-4">
            <Form.Label className="text-gray-500">Contact Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile no."
              className="mb-4"
              name="number"
              //   value={number}
              //   onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="col-4">
            <Form.Label className="text-gray-500">Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              className="mb-4"
              name="email"
              //   value={email}
              //   onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
          <div className="col-4">
            <Form.Label className="text-gray-500">
              Event name &amp; Date
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Event Details"
              name="eventName"
              //   value={eventName}
              //   onChange={(e) => setEventName(e.target.value)}
              className="mb-4"
            />
            <div></div>
          </div>
          <div className="col-4">
            <Form.Label className="text-gray-500">Event Details</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Event Details"
              name="eventDetails"
              //   value={eventDetails}
              //   onChange={(e) => setEventDetails(e.target.value)}
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Book;
