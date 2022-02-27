import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactForm from "./ContactForm";
import "./Contact.css";
import yellowbgCards from "../../../assets/imgs/yellowbgCardsVertical.jpg";

export default function Contact() {
  return (
    <>
      <Col sm={12} md={6} className="Contact order-1 order-md-2">
        <Row className="align-items-start">
          <h2>Get In Touch</h2>
        </Row>
        <Row className="ContactForm align-items-center justify-content-center">
          <ContactForm />
        </Row>
      </Col>
      <Col sm={12} md={6}>
        <Image
          fluid
          className="ContactImage"
          src={yellowbgCards}
          alt="tarot cards with colorful illustrations spread over a yellow cloth."
        />
      </Col>
    </>
  );
};
