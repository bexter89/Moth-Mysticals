import React from "react";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import './About.css'
import bioPic from '../../../assets/imgs/Gabee_About.jpg'
import aboutText from '../../textFiles/aboutText'


const About = () => {

  return (
    <>
      <Col xs={12} md={6} className="justify-content-center">
        <article className="blurb">
          <h2>About Me</h2>
            {aboutText}
        </article>
      </Col>
      <Col xs={12} md={6}>
        <Image fluid src={bioPic} alt="About Pic" className="bioPic" />
      </Col>
    </>
  )
};

export default About;