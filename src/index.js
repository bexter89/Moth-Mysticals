import React from 'react';
import ReactDOM from 'react-dom';
import Popper from '@popperjs/core';
import WebFont from 'webfontloader';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { DisplayProvider } from './components/DisplayContext';
import App from './App';
import Footer from './components/Footer'
import PaloSanto from '../assets/fonts/PaloSanto.ttf'
import Displace from '../assets/fonts/Displace.ttf'
import './styles.css'
import './fonts.css'

const config = {
  custom: {
    families: ['Displace', 'PaloSanto'],
    urls: ['./fonts.css']
  }
};
// Callback receives the status of the general webfont loading process. *OPTIONAL*
const callback = status => {
  // I could hook the webfont status to for example Redux here.
};

// This receives the font specific status of the webfont loading process. *OPTIONAL*
const fontCallback = (font, variation, status) => {
  // I could hook the webfont status to for example Redux here.
};

ReactDOM.render(
  <WebfontLoader config={config} onStatus={callback} onFontStatus={fontCallback}>
  <BrowserRouter>
  <DisplayProvider>
    <App />
    <Footer />
  </DisplayProvider>
  </BrowserRouter>
</WebfontLoader>,
  document.getElementById('root')
);




