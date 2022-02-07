import React, { useState, useContext, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
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
      <a name="about"/>
      <Col md="6">
        <div className="blurb order-1 order-md-2">
        <h2>About Me</h2>
            {aboutText}
        </div>
      </Col>
      <Col md="6">
        <img src={bioPic} alt="About Pic" className="bioPic" />
      </Col>
    </>
  )
};

export default About;