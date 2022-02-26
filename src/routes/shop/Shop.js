import React from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jump from "react-reveal/Jump";
import Carousel from "./carousel/Carousel";
import "./shop.css";

const Shop = () => {
  return (
    <>
      <Col lg={6} md={12} className="Shop align-self-start">
        <Jump>
          <h2>Shop</h2>
        </Jump>
        <h3>JOYería</h3>
        <p className="Shop-Summary">
        The jewelry line by Moth Mysticals is called JOYería; a Tex-Mex take on the Spanish word for jewelry. Emphasis on JOY. Almost all of of the materials for JOYería are reused.
        </p>
        <Button
          href="https://www.etsy.com/shop/MothMysticals"
          target="_blank"
          rel="noopener noreferrer"
          variant="info"
          size="lg"
        >
          Shop on Etsy
        </Button>
      </Col>
      <Col lg={6} md={12} className="align-self-start">
        <Carousel className="ShopCarousel" />
      </Col>
    </>
  );
};

export default Shop;
