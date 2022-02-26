import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Slide from "react-reveal/Slide";
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import skulls from "../../../assets/imgs/MM_skulls_WEB.jpg";
import lungs from "../../../assets/imgs/MM_LUNGS_WEB.jpg";
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg";
import crow from "../../../assets/imgs/MM_RAVEN_WEB.jpg";
import Carousel from 'react-multi-carousel';
import '../../../node_modules/react-multi-carousel/lib/styles.css';
import "./TarotCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TarotCarousel() {
  const tarotEthics = [
    {
      num: "I.",
      text: "Tarot and I will meet you right where you are without judgment. Please be prepared to do the same for yourself.",
      image: dog,
    },
    {
      num: "II.",
      text: "Bring an open heart, curiosity and imagination to your session. You’ll need one or all of these to see the new and fresh perspectives Tarot may offer you.",
      image: lungs,
    },
    {
      num: "III.",
      text: "Your reading is confidential. I will never share information publicly unless with your consent.",
      image: vase,
    },
    {
      num: "IV.",
      text: "I will not conduct a reading for a minor (<18yrs) without a guardian’s consent and/or presence.",
      image: crow,
    },
    {
      num: "V.",
      text: "I will not conduct a 3rd party reading. Your reading will always focus on you.",
      image: dog,
    },
    {
      num: "VI.",
      text: "I am not a lawyer, financial advisor, therapist or a medical doctor. Please direct these types of inquiries accordingly.",
      image: lungs,
    },
    {
      num: "VII.",
      text: "Please note that by purchasing any service, you hereby agree that you’ve read and understand these aforementioned guidelines.",
      image: vase,
    },
  ];

  return (
    <>
      <Carousel
        responsive={responsive}
        centerMode={false}
        infinite={false}
        itemClass="carousel-item-padding-20-px"
        containerClass="carousel-container"
        showDots={false}
      >
          {tarotEthics.map((item) => (
            <div key={item.num}>
              <span style={{ width: "100%", height: "100%" }}>
                <h3>{item.num}</h3>
                <p>{item.text}</p>
              </span>
            </div>
          ))}
      </Carousel>
      <br/>
    </>
  );
}
