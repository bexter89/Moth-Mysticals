import React, { useState, useContext, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import ContactForm from './ContactForm'
import Jump from 'react-reveal/Jump';
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
      <Jump>
      <h2>Get In Touch</h2>
      </Jump>
      <Col md="5" className="order-1 order-md-2">
        <ContactForm />
      </Col>
      <Col md="7">
        <Image
          fluid
          thumbnail
          className="ContactImage"
          src={Gab}
          alt="An overhead view of Gabee laying on her back, wearing a black and yellow banana-print  jumpsuit with tarot cards surrounding her."
        />
      </Col>
    </>
  );
};

export default Booking;
