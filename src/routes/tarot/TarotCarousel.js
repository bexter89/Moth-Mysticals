import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import skulls from "../../../assets/imgs/MM_skulls_WEB.jpg"
import lungs from "../../../assets/imgs/MM_LUNGS_WEB.jpg"
import vase from "../../../assets/imgs/MM_VASE_WEB.jpg"
import crow from "../../../assets/imgs/MM_RAVEN_WEB.jpg"
import styled, { css } from 'styled-components';

const width = '75vh', height='25vh';
const Container = styled.div`
  border: none;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  width: ${width};
  background-color: #F2BFC8;;
`;
const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  color: #E98A9C;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: none;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  color: #E98A9C;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

export default function TarotCarousel () {
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

  return (
  <>
  <Carousel>
      {tarotEthics.map((point, idx) => (
    <Slide right key={point.num}>
      <div key={point.num} className="EthicsSlideshow">
        <h1>{point.num}</h1>
        <p>{point.text}</p>
      </div>
    </Slide>
    ))}

  </Carousel>
  </>
  )
};