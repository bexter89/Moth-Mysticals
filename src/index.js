import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Footer from './components/Footer'
import { DisplayProvider } from './components/DisplayContext';
import PaloSanto from '../assets/fonts/palosanto-webfont.woff'
import '../assets/fonts/palosanto-webfont.woff2'
import '../assets/fonts/PaloSanto.eot'
import '../assets/fonts/PaloSanto.otf'
import Displace from '../assets/fonts/Serebryakov-Displace.eot'
import '../assets/fonts/Serebryakov-Displace.otf'
import '../assets/fonts/serebryakov_-_displace-webfont.woff'
import '../assets/fonts/serebryakov_-_displace-webfont.woff2'
ReactDOM.render(
  <BrowserRouter>
  <DisplayProvider>
    <App />
    <Footer />
  </DisplayProvider>
  </BrowserRouter>,
  document.getElementById('root')
);




