import React  from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import ContactForm from './ContactForm'
import Jump from 'react-reveal/Jump';
import "./Contact.css";
import Gab from "../../../assets/imgs/overhead.jpg";

const Contact = () => {

  return (
    <>
      <Col md="6" className="order-1 order-md-2">
      <Jump>
      <h2>Get In Touch</h2>
      </Jump>
        <ContactForm />
      </Col>
      <Col md="6">
        <Image
          fluid
          className="ContactImage"
          src={Gab}
          alt="An overhead view of Gabee's hands shuflfing through tarot cards with an arch of tarot cards spread out, framing the top of the shot."
        />
      </Col>
    </>
  );
};

export default Contact;
