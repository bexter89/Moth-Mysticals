import React, { useState, useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import { DisplayContext } from '../../components/DisplayContext';
import './About.css'
import bioPic from '../../../assets/imgs/Gabee_About.jpg'
import aboutText from '../../textFiles/aboutText'


const About = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
    <>
      <Col xs={12} md={6}>
      <Fade left>
        <article className="blurb">
          <h2>About Me</h2>
            {aboutText}
        </article>
        </Fade>
      </Col>
      <Col xs={12} md={6}>
        <Image flex src={bioPic} alt="About Pic" className="bioPic" />
      </Col>
    </>
  )
};

export default About;