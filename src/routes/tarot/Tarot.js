import React, { useState, useContext } from "react";
import TarotCarousel from './TarotCarousel'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Decks from "./Decks";
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import skulls from "../../../assets/imgs/MM_skulls_WEB.jpg";
import lungs from "../../../assets/imgs/MM_LUNGS_WEB.jpg";
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg";
import crow from "../../../assets/imgs/MM_RAVEN_WEB.jpg";
import "./tarot.css";

const Tarot = () => {
  const images = [{name:'wolf', src: dog}, {name:'lungs', src: lungs}, {name:'vase', src: vase}, {name:'raven', src: crow}];

  return (
    <>
    <section className="Tarot justify-content-center">
      <h2>Tarot Ethics</h2>
      <Row className="justify-content-center mt-5">
        <TarotCarousel />
      </Row>
      </section>
    </>
  );
};

export default Tarot;
