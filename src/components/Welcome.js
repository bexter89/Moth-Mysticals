import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { DisplayContext } from '../components/DisplayContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import raven from '../../assets/imgs/raven_nobackground.svg';


const Welcome = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;

  const navigate = useNavigate();

  const handleClick = () => {
    setDisplayNav(true);
    navigate('/home');
  }

  return (
  <>
    <Row className="align-items-center justify-content-center">
      <Col className="text-center" >
        <Image src={raven} alt="moth mysticals raven logo" className="splashImg fluid" onClick={handleClick}/>
        <br/>
      </Col>
    </Row>
    <Row className="align-items-center justify-content-center">
      <Col className="text-center splashTxt" onClick={handleClick} >
       <h1>CLICK TO ENTER...</h1>
      </Col>
    </Row>
   </>
  )
};

export default Welcome;