import React, { useState, useContext, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import ContactForm from './ContactForm'
import { DisplayContext } from "../../components/DisplayContext";
import "./booking.css";
import Gab from "../../../assets/imgs/Gabee_Cards_Spread.jpg";

const Booking = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
    <>
      <a name="contact" />
      <h2>Get In Touch</h2>
      <Col md="6">
        <ContactForm />
      </Col>
      <Col md="6">
        <Image
          fluid
          src={Gab}
          alt="Gabee is laying on her back with cards surrouning her"
        />
      </Col>
    </>
  );
};

export default Booking;
