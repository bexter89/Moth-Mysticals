import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { DisplayContext } from '../../components/DisplayContext';
import About from '../about/About';
import Booking from '../booking/Booking';
import TopBanner from '../top-banner/TopBanner'
import Tarot from '../tarot/Tarot'
import Shop from '../shop/Shop'
import moth from '../../../assets/imgs/moth_logo.png';


const Home = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
  <>
    <Helmet>
        <title>Home - Moth Mysticals</title>
        <meta
          name="description"
          content="Moth Mysticals Home"
        />
    </Helmet>
    <div className="container fluid align-items-center justify-content-center">
    <div className="row align-items-center justify-content-center">
        <TopBanner />
      </div>
      <div className="row align-items-center justify-content-center">
        <About />
      </div>
      <div className="row align-items-center justify-content-center">
        <Tarot />
      </div>
      <div className="row align-items-center justify-content-center">
        <Shop />
      </div>
      <div className="row align-items-center justify-content-center">
        <Booking/>
      </div>
    </div>
  </>
  )
};

export default Home;
