import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import wolf from "../../../assets/imgs/MM_MOON_WEB.jpg";
import "./booking.css";

function Booking() {
  return (
    <>
      <Col sm={12} md={6}className="align-self-start">
        <h2>Booking</h2>
        <p className="Tarot-Summary">
          I use tarot for self-reflection, evolution and empowerment. I, nor the
          cards, can or will predict your future. Instead, I will offer insight
          into the present.
        </p>
        <p className="Tarot-Summary">
          The clearer and more honest we are with our present selves, the
          clearer our desires and path for the future can become. You can expect
          a warm and compassionate space to be witnessed, receive guidance,
          validation, affirmation(s) and general messages in alignment with your
          evolution at this time.
        </p>
        <p className="Tarot-Summary">
          My hope is that you leave your session feeling empowered and spacious
          in the here and now.
        </p>
        <h3>Cancellation Policy</h3>
        <p className="Tarot-Summary">
        <strong>Please cancel 24hrs before our scheduled meeting time.</strong> If less than
          24hrs notice is given, you will be invoiced 50% of your session’s
          rate. “No shows” for appointments will be charged in full; no
          exceptions. <strong>No refunds.</strong>
        </p>
        <br />
        <Button
          href="https://booking.setmore.com/scheduleappointment/dbee31de-b157-4b73-a457-c8095eb3a818"
          target="_blank"
          rel="noopener noreferrer"
          variant="danger"
          size="lg"
        >
          Book a Session
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <Image
          className="BookingImage"
          fluid
          src={wolf}
          alt="an illustrated drawing of a wolf with eyes all over its body, standing on a pink and red checkered floor. Behind the wolf you can see an arched window surrounded by vines and white flowers. There is a full moon and stars visible thorugh the window."
        />
      </Col>
    </>
  );
}

export default Booking;
