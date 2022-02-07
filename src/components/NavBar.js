import React from 'react';
import moth from  '../../assets/imgs/moth_logo.png'
import './NavBar.css'

const NavBar = () => {

  return (
    <>
    <nav className="navbar fixed-top navbar-expand-md navbar-dark" id="mainNavbar">
      <div className="container-fluid">
      <a className="navbar-brand" href="#brand">
        <img
          alt=""
          src={moth}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
          MOTH MYSTICALS
          </a>
        </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tarot">Tarot</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.etsy.com/shop/MothMysticals" target="_blank" rel="noopener noreferrer">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        </ul>
    </div>
        </nav>
  </>
  )
}

export default NavBar;