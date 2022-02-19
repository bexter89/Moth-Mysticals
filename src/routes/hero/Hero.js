import React, {useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Zoom from 'react-reveal/Zoom';
import HeroImage from './HeroImage'
import './Hero.css'

export default function Hero () {
  const [offset, setOffset ] = useState(0)

  useEffect(()=> {
    window.addEventListener('scroll', parallaxShift)
  },[])

  function parallaxShift(e) {
    setOffset(window.pageYOffset)
  }


  return (
    <>
    <header
      className='header-background'
      style={{ backgroundPositionY: offset}}
    >
      <section
        className='Overlay'
        style={{ bottom: offset / 1.5 }}
      >
        <h1>MOTH MYSTICALS</h1>
        <h3  id="hero-Text">Tarot. JOYería. Sustainable Art.</h3>
      </section>
      </header>
      </>
  )
}