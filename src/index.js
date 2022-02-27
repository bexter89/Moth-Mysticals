import React from "react";
import ReactDOM from "react-dom";
import Popper from "@popperjs/core";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import PaloSanto from "../public/fonts/PaloSanto.ttf";
import Displace from "../public/fonts/Displace.ttf";
import revicons from '../public/fonts/revicons.ttf'
import "./styles.css";

ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>,
  document.getElementById("root")
);
