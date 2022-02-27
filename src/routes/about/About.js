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
      <article className="blurb">
        <h2>About Me</h2>
          {aboutText}
      </article>
      <Image src={bioPic} alt="a photo of Gabriella sitting on teh floor in front of a black background, wearing a patterened, multi-colored dress, colorful pom headband, and colorful makeup with gems. She is leaning foward towards the camera, appearing to be laughing, while holding and spreading tarot cards in her hands." className="AboutPic" />
    </>
  )
};

export default About;