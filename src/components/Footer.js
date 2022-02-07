import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer text-center fixed-bottom">
        <div className="row">
          <div className="col"></div>
          <div className="col footer">
            <footer>
              All images and content © 2021 Moth Mysticals™
              <br/>
              Built by <a href="https://github.com/bexter89" target="_blank" rel="noreferrer noopener">Bexter</a>
            </footer>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
