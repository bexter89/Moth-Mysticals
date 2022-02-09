import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles.css";
import "./fonts.css";
import { DisplayContext } from './components/DisplayContext';
import Footer from "../src/components/Footer";
import Welcome from "../src/components/Welcome"
import Home from './routes/home/Home'
import About from "./routes/about/About";
import Tarot from "./routes/tarot/Tarot";
import Decks from "./routes/tarot/Decks";
import Booking from "./routes/booking/Booking";
import Shop from "./routes/shop/Shop";
import NoMatch from "./components/NoMatch"


const App = () => {
  const { displayNavState, displayTitleState } = useContext(DisplayContext);
  const [displayNav, setDisplayNav] = displayNavState;
  const [title, setTitle] = displayTitleState;
  return (
    <>
    <div className="App">
    <Helmet>
        <title>Moth Mysticals - Home</title>
        <link rel='canonical' href='https://moth-mysticals-v2.netlify.app/' />
        <meta
          name="description"
          content="get information about Moth Mysticals"
        />
        <meta
          name="keywords"
          content="Tarot, Witch, Moth Mysticals, hand-made jewlery, queer-owned business"
        />
    </Helmet>

      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </>
  );
}



export default App;