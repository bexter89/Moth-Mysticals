import React, { useState, useContext, useEffect } from "react";
import { DisplayContext } from '../../components/DisplayContext';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import TarotEthics from './TarotEthics'
import Decks from './Decks'
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import skulls from "../../../assets/imgs/MM_skulls_WEB.jpg"
import lungs from "../../../assets/imgs/MM_LUNGS_WEB.jpg"
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg"
import crow from "../../../assets/imgs/MM_RAVEN_WEB.jpg"
import './tarot.css'


const Tarot = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  const tarotEthics = [{
    num: "I.",
    text: "Tarot and I will meet you right where you are without judgement. Please be prepared to do the same for yourself.",
    image: dog,
  },
  {
    num:"II.",
    text: "Bring an open heart, curiosity and imagination to your session. You’ll need one or all of these to see the new and fresh perspectives Tarot may offer you." ,
    image: lungs,
  },
  {
    num:"III.",
    text: "Your reading is confidential. I will never share information publicly unless with your consent.",
    image: vase,
  },
  {
    num:"IV.",
    text: "I will not conduct a reading for a minor (<18yrs) without a guardian’s consent and/or presence.",
    image: crow,
  },
  {
    num:"V.",
    text: "I will not conduct a 3rd party reading. Your reading will always focus on you." ,
    image: dog,
  },
  {
    num:"VI.",
    text: "I am not a lawyer, financial advisor, therapist or a medical doctor. Please direct these types of inquiries accordingly",
    image: lungs,
  },
  {
    num:"VII.",
    text: "Please note that by purchasing any service, you hereby agree that you’ve read and understand these guidelines above.",
    image: vase,
  }]

  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
    <>
    <a name="tarot"/>
    <h2>Tarot Ethics</h2>
    <Row>
      <Col>
      I use tarot for self-reflection, evolution and empowerment. I, nor the cards, can or will predict your future. Instead, I will offer insight into the present. The clearer and more honest we are with our present selves, the clearer our desires and path for the future can become. You can expect a warm and compassionate space to be witnessed, receive guidance, validation, affirmation(s) and general messages in alignment with your evolution at this time. My hope is that you leave your session feeling empowered and spacious in the here and now.
      </Col>
    </Row>

    <Row xs={1} md={3} lg={4} className="g-4">
    {tarotEthics.map((point, idx) => (
    <div key={point.num}>
    <Col>
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={point.image} />
        <Card.Body>
          <Card.Title>{point.num}</Card.Title>
          <Card.Text>
          {point.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </div>
    ))}
    </Row>
  </>
  );
};

export default Tarot;