import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Slide from "react-reveal/Slide";
import Carousel from "react-multi-carousel";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import "./TarotCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 5,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 501 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

export default function TarotCarousel() {
  const tarotEthics = [
    {
      num: "I.",
      text: "Tarot and I will meet you right where you are without judgment. Please be prepared to do the same for yourself.",
    },
    {
      num: "II.",
      text: "Bring an open heart, curiosity and imagination to your session. You’ll need one or all of these to see the new and fresh perspectives Tarot may offer you.",
    },
    {
      num: "III.",
      text: "Your reading is confidential. I will never share information publicly unless with your consent.",
    },
    {
      num: "IV.",
      text: "I will not conduct a reading for a minor (<18yrs) without a guardian’s consent and/or presence.",
    },
    {
      num: "V.",
      text: "I will not conduct a 3rd party reading. Your reading will always focus on you.",
    },
    {
      num: "VI.",
      text: "I am not a lawyer, financial advisor, therapist or a medical doctor. Please direct these types of inquiries accordingly.",
    },
    {
      num: "VII.",
      text: "Please note that by purchasing any service, you hereby agree that you’ve read and understand these aforementioned guidelines.",
    },
  ];

  return (
    <>
      <Carousel
        responsive={responsive}
        arrows
        centerMode={false}
        infinite={false}
        autoPlay={false}
        itemClass="carousel-item-padding-1-px"
        containerClass="carousel-container"
        showDots={false}
      >
        {tarotEthics.map((item) => (
          <div key={item.num} className="tarot-ethics-item">
            <h3>{item.num}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </Carousel>
      <br />
    </>
  );
}
