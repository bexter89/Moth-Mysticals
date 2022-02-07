import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { DisplayContext } from '../../components/DisplayContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from '../about/About';
import Booking from '../booking/Booking';
import Hero from '../hero/Hero'
import Tarot from '../tarot/Tarot'
import Shop from '../shop/Shop'
import moth from '../../../assets/imgs/moth_logo.png';


const Home = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
  <>
    <Helmet>
        <title>Home - Moth Mysticals</title>
        <meta
          name="description"
          content="Moth Mysticals Home"
        />
    </Helmet>
      <Row className="Hero align-items-center justify-content-center">
        <Hero />
      </Row>
      <Row className="About align-items-center justify-content-center">
        <About />
      </Row>
      <Row className="Tarot align-items-center justify-content-center">
        <Tarot />
      </Row>
      <Row className="Booking align-items-center justify-content-center">
        <Booking/>
      </Row>
  </>
  )
};

export default Home;
