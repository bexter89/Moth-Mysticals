import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { DisplayContext } from '../../components/DisplayContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from '../about/About';
import Contact from '../contact/Contact';
import Hero from '../hero/Hero'
import Tarot from '../tarot/Tarot'
import Booking from '../booking/Booking'
import moth from '../../../assets/imgs/moth_logo.png';
import Pulse from 'react-reveal/Pulse';

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
    <a className="anchor" name="home" id="top"></a>
    <Pulse>
      <Row className="Hero align-items-center justify-content-center">
        <Hero />
      </Row>
      <Row className="About align-items-center justify-content-center">
      <a className="anchor" name="about" ></a>
        <About />
      </Row>
      <Row className="Tarot">
      <a className="anchor" name="tarot" ></a>
        <Tarot />
      </Row>
      <Row className="Booking align-items-start justify-content-start gx-5">
      <a className="anchor" name="booking" ></a>
        <Booking/>
      </Row>
      <Row className="Contact align-items-center justify-content-center">
      <a className="anchor" name="contact" ></a>
        <Contact/>
      </Row>
    </Pulse>
  </>
  )
};

export default Home;
