import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { DisplayContext } from '../../components/DisplayContext';
import './About.css'
import bioPic from '../../../assets/imgs/Gabee_About.jpg'
import aboutText from '../../textFiles/aboutText'


const About = () => {
  const { displayNavState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  useEffect(() => {
    setDisplayNav(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - Moth Mysticals</title>
        <meta
          name="description"
          content="About Moth Mysticals"
        />
      </Helmet>
      <a name="about"/>
      <div className="col-md-6">
        <img src={bioPic} alt="About Pic" className="bioPic" />
      </div>
      <div className="col-md-6">
        <div className="blurb">
            {aboutText}
        </div>
      </div>
    </>
  )
};

export default About;