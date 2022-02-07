import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import tarotText from '../../textFiles/tarotText'
import './tarot.css'

const TarotEthics = () => {
  return (
    <>
      <Helmet>
        <title>Tarot Ethics - Moth Mysticals</title>
        <meta
          name="description"
          content="Tarot Ethics"
        />
      </Helmet>
      <section>
        {tarotText}
      </section>
    </>
  );
};

export default TarotEthics;