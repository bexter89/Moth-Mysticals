import React, { useState, useContext } from "react";
import { DisplayContext } from "../../components/DisplayContext";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Decks from "./Decks";
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import skulls from "../../../assets/imgs/MM_skulls_WEB.jpg";
import lungs from "../../../assets/imgs/MM_LUNGS_WEB.jpg";
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg";
import crow from "../../../assets/imgs/MM_RAVEN_WEB.jpg";
import TarotCarousel from "./TarotCarousel";
import Flip from 'react-reveal/Flip';
import "./tarot.css";

const Tarot = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  const images = [{name:'wolf', src: dog}, {name:'lungs', src: lungs}, {name:'vase', src: vase}, {name:'raven', src: crow}];
  return (
    <>
    <section className="Tarot justify-content-center">
      <h2>Tarot Ethics</h2>
      <Row className="justify-content-center mt-5">
      <Container>
        <TarotCarousel />
      </Container>
      </Row>
      <Row className="justify-content-center mt-5">
        <p className="Tarot-Summary">
        I use tarot for self-reflection, evolution and empowerment. I, nor the cards, can or will predict your future. Instead, I will offer insight into the present.The clearer and more honest we are with our present selves, the clearer our desires and path for the future can become. You can expect a warm and compassionate space to be witnessed, receive guidance, validation, affirmation(s) and general messages in alignment with your evolution at this time. My hope is that you leave your session feeling empowered and spacious in the here and now.
        <br/><br/>
        <a id="Setmore_button_iframe" style={{float:'none'}} href="https://booking.setmore.com/scheduleappointment/dbee31de-b157-4b73-a457-c8095eb3a818"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg" alt="Book an appointment with Moth Mysticals" /></a>
        </p>
      </Row>
      </section>
    </>
  );
};

export default Tarot;
