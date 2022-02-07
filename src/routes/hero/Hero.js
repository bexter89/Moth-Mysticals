import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Gab from '../../../assets/imgs/Gabee_Show_Cards.jpg';
import Zoom from 'react-reveal/Zoom';

import './Hero.css'

export default function Hero () {
  return (
    <>
    <div className="heroImage">
      <div className="Overlay">
        <Zoom>
        <h1>MOTH MYSTICALS</h1>
        <p id="hero-Text">Tarot. JOYeria. Sustainable Art.</p>
        </Zoom>
    </div>
    </div>
    </>
  )
}