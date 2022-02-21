import React from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactForm from "./ContactForm";
import Jump from "react-reveal/Jump";
import "./Contact.css";
import yellowbgCards from "../../../assets/imgs/yellowbgCardsVertical.jpg";

const Contact = () => {
  return (
    <>
      <Col sm={12} md={6} className="ContactForm order-1 order-md-2">
        <Row className="align-items-start">
          <Jump>
            <h2>Get In Touch</h2>
          </Jump>
        </Row>
        <Row>
          <ContactForm />
        </Row>
      </Col>
      <Col sm={12} md={6}>
        <Image
          fluid
          className="ContactImage"
          src={yellowbgCards}
          alt="An overhead view of Gabee's hands shuflfing through tarot cards with an arch of tarot cards spread out, framing the top of the shot."
        />
      </Col>
    </>
  );
};

export default Contact;
