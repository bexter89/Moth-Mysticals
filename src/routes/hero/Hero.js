import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Hero.css";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      window.addEventListener("scroll", parallaxShift);
    }
    return () => {
      isMounted = false;
    };
  }, [window.pageYOffset]);

  function parallaxShift(e) {
    setOffset(window.pageYOffset);
  }

  return (
    <>
      <div className="hero-image" style={{ backgroundPositionY: offset }}>
        <div className="hero-text" style={{ bottom: offset / 1.5 }}>
          <h1>MOTH MYSTICALS</h1>
          <h3>Tarot. JOYería. Sustainable Art.</h3>
        </div>
      </div>
    </>
  );
}
