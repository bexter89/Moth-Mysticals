import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { DisplayContext } from '../components/DisplayContext';
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
    <div className="row align-items-center justify-content-center">
      <div className="col text-center" >
        <img src={raven} alt="moth mysticals raven logo" className="splashImg fluid" onClick={handleClick}/>
        <br/>
      </div>
    </div>
    <div className="row align-items-center justify-content-center">
      <div className="col text-center splashTxt" onClick={handleClick} >
       <h1>CLICK TO ENTER...</h1>
      </div>
    </div>
   </>
  )
};

export default Welcome;