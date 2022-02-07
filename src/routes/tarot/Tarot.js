import React, { useState, useContext } from "react";
import { DisplayContext } from "../../components/DisplayContext";
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
      <a name="tarot" />
        <h2 className="Tarot">Tarot Ethics</h2>
        <TarotCarousel />

      <Row  md={4} className="justify-content-center">
        <Flip left cascade>
        {images.map(image => (
          <Col className="Tarot-Images d-xs-none d-sm-none d-md-block" key={image.name}>
              <Image src={image.src} className="tarotImage"/>
          </Col>
        )
        )}
        </Flip>
        </Row>
        <Row>
          <p className="Tarot-Summary">
          I use tarot for self-reflection, evolution and empowerment. I,
          nor the cards, can or will predict your future. Instead, I will
          offer insight into the present. The clearer and more honest we
          are with our present selves, the clearer our desires and path
          for the future can become. You can expect a warm and
          compassionate space to be witnessed, receive guidance,
          validation, affirmation(s) and general messages in alignment
          with your evolution at this time. My hope is that you leave your
          session feeling empowered and spacious in the here and now.
          </p>
      </Row>

    </>
  );
};

export default Tarot;
