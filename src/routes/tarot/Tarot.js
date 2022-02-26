import React, { useState, useContext } from "react";
import TarotCarousel from './TarotCarousel'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Decks from "./Decks";
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import "./tarot.css";

const Tarot = () => {
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
