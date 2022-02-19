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
      <a name="contact" />
      <Jump>
      <h2>Get In Touch</h2>

      <a id="Setmore_button_iframe" style={{float:'none'}} href="https://booking.setmore.com/scheduleappointment/dbee31de-b157-4b73-a457-c8095eb3a818"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg" alt="Book an appointment with Moth Mysticals" /></a>

      </Jump>
      <Col md="5" className="order-1 order-md-2">
        <ContactForm />
      </Col>
      <Col md="7">
        <Image
          fluid
          thumbnail
          src={Gab}
          alt="An overhead view of Gabee laying on her back, wearing a black and yellow banana-print  jumpsuit with tarot cards surrounding her."
        />
      </Col>
    </>
  );
};

export default Booking;
