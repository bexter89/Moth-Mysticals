import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Jump from 'react-reveal/Jump';
import Carousel from './carousel/Carousel'
import './shop.css'

const Shop = () => {
  return (
    <>
      <Col lg={6} md={12} className="Shop align-self-start">
      <Jump>
        <h2>Shop</h2>
      </Jump>
        <p className="Shop-Summary">
        I use tarot for self-reflection, evolution and empowerment. I, nor the cards, can or will predict your future. Instead, I will offer insight into the present.
        </p>
        <Button href="https://www.etsy.com/shop/MothMysticals" target="_blank" rel="noopener noreferrer" variant="info">Shop on Etsy</Button>
      </Col>
      <Col lg={6} md={12} className="align-self-start" >
        <Carousel className="ShopCarousel"/>
      </Col>
    </>
  );
};

export default Shop;