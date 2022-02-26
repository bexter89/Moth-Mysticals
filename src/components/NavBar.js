import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import moth from '../../assets/imgs/moth_logo.png'
import './NavBar.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect id="mainNavbar" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <img
            alt="MOTH MYSTICALS LOGO"
            src={moth}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
            MOTH &nbsp; MYSTICALS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link eventKey={1} href="#about">
              ABOUT
            </Nav.Link>
            <Nav.Link eventKey={2} href="#tarot">
              TAROT
            </Nav.Link>
            <Nav.Link eventKey={3} href="#booking">
              BOOKING
            </Nav.Link>
            <Nav.Link eventKey={4} href="https://www.etsy.com/shop/MothMysticals" target="_blank" rel="noopener noreferrer">
              SHOP
            </Nav.Link>
            <Nav.Link eventKey={5} href="#contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;