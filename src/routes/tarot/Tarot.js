import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, Outlet } from 'react-router-dom';
import { DisplayContext } from '../../components/DisplayContext';
import TarotEthics from './TarotEthics'
import Decks from './Decks'
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import skulls from "../../../assets/imgs/MM_skulls_WEB.jpg"
import './tarot.css'


const Tarot = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tarot - Moth Mysticals</title>
        <meta
          name="description"
          content="Tarot services by Moth Mysticals"
        />
      </Helmet>
    <a name="tarot"/>
    <h1>TAROT</h1>
    <hr/>
      <div className="column justify-content-center nestedNav px-0 fluid">
        <div className="row align-items-center justify-content-center">
      <nav>
          <Link to="ethics" className="nestedLink">
            Tarot Ethics
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="decks" className="nestedLink">
            Tarot Decks
          </Link>
      </nav>
      </div>
    </div>
    <hr/>
    <div className="col-md-7 text-center col-md-offset-2">
      <div className="content blurb">
        <Outlet />
      </div>
    </div>
    <div className="col-md-5 align-items-center justify-content-center">
      <img src={skulls} alt="moth mysticals logo" className="fluid imageCard"/>
    </div>
  </>
  );
};

export default Tarot;