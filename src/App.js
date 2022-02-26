import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles.css";
import Footer from "../src/components/Footer";
import Home from './routes/home/Home'
import NoMatch from "./components/NoMatch"


const App = () => {

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
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
    </>
  );
}

export default App;