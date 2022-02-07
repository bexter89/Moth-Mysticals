import React, { useState } from "react";
import { Helmet } from "react-helmet";
import dog from "../../../assets/imgs/MM_MOON_WEB.jpg";
import '../../routes/tarot/tarot.css'

const Decks = () => {
  return (
    <>
      <Helmet>
        <title>Tarot Decks - Moth Mysticals</title>
        <meta
          name="description"
          content="learn about deck options for tarot readings by Moth Mysticals"
        />
      </Helmet>
      <section>
        <h2>Tarot Decks</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/the_wild_unknown/" target="_blank" rel="noopener noreferrer">
              Kim Kran's Wild Unknown
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ricardocavolo/" target="_blank" rel="noopener noreferrer">
              Ricardo Cavolo's Tarot del Fuego
            </a>
          </li>
          <li>
            <a href="https://www.tarot.com/tarot/decks/rider" target="_blank" rel="noopener noreferrer">
            Rider-Waite
            </a>
          </li>
          <li>
            <a href="https://www.aeclectic.net/tarot/cards/morgan-greer/" target="_blank" rel="noopener noreferrer">
            Morgan Greer Pocket Deck
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rainbowhearttarot/" target="_blank" rel="noopener noreferrer">
            Rachel Rosenkoetter's Rainbow Heart Tarot: 3rd Edition
            </a>
          </li>
          <li>
            <a href="https://www.mjcullinane.com/crow-tarot" target="_blank" rel="noopener noreferrer">
            MJ Cullinane's Crow Tarot Oracle Deck
            </a>
          </li>
        </ul>
      </section>

    </>
  );
};

export default Decks;
