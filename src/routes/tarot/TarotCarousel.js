import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Slide from 'react-reveal/Slide';
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import skulls from "../../../assets/imgs/MM_skulls_WEB.jpg"
import lungs from "../../../assets/imgs/MM_LUNGS_WEB.jpg"
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg"
import crow from "../../../assets/imgs/MM_RAVEN_WEB.jpg"

import './TarotCarousel.css'

export default function TarotCarousel () {
  const tarotEthics = [{
    num: "I.",
    text: "Tarot and I will meet you right where you are without judgment. Please be prepared to do the same for yourself.",
    image: dog,
  },
  {
    num:"II.",
    text: "Bring an open heart, curiosity and imagination to your session. You’ll need one or all of these to see the new and fresh perspectives Tarot may offer you.",
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
    text: "I am not a lawyer, financial advisor, therapist or a medical doctor. Please direct these types of inquiries accordingly.",
    image: lungs,
  },
  {
    num:"VII.",
    text: "Please note that by purchasing any service, you hereby agree that you’ve read and understand these aforementioned guidelines.",
    image: vase,
  }]

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
  <>
   <Carousel activeIndex={index} onSelect={handleSelect}  variant="dark">
      {tarotEthics.map((point, idx) => (
        <Carousel.Item key={point.num}>
           <Image
            className="CarouselImage"
            src={point.image}
            alt={point.num}
          />
      <Carousel.Caption className="EthicsSlideshow">
        <h2>{point.num}</h2>
        <p>{point.text}</p>
      </Carousel.Caption>
    </Carousel.Item>
    ))}
  </Carousel>
  </>
  )
};