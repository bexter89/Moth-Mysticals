import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Jump from 'react-reveal/Jump';
import wolf from "../../../assets/imgs/MM_MOON_WEB.jpg";
import './Booking.css'

function Booking () {

  return (
    <>
      <Jump>
        <h2>Booking</h2>
      </Jump>
      <Row className="justify-content-center mt-5">
        <Col md="6">
          <p className="Tarot-Summary">
          I use tarot for self-reflection, evolution and empowerment. I, nor the cards, can or will predict your future. Instead, I will offer insight into the present.The clearer and more honest we are with our present selves, the clearer our desires and path for the future can become. You can expect a warm and compassionate space to be witnessed, receive guidance, validation, affirmation(s) and general messages in alignment with your evolution at this time. My hope is that you leave your session feeling empowered and spacious in the here and now.
          <br/><br/>
          <a id="Setmore_button_iframe" style={{float:'none'}} href="https://booking.setmore.com/scheduleappointment/dbee31de-b157-4b73-a457-c8095eb3a818"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg" alt="Book an appointment with Moth Mysticals" /></a>
          </p>
        </Col>
        <Col md="6">
          <Image
            fluid
            className="ContactImage"
            src={wolf}
            alt="An overhead view of Gabee's hands shuflfing through tarot cards with an arch of tarot cards spread out, framing the top of the shot."
            />
        </Col>
      </Row>
    </>
  );
};

export default Booking;
