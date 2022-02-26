import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Footer from './components/Footer'
import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { DisplayProvider } from './components/DisplayContext';
import PaloSanto from './fonts/palosanto-webfont.woff'
import './fonts/palosanto-webfont.woff2'
import './fonts/PaloSanto.ttf'
import './fonts/PaloSanto.eot'
import './fonts/PaloSanto.otf'
import Displace from './fonts/Serebryakov-Displace.eot'
import './fonts/Serebryakov-Displace.otf'
import './fonts/Serebryakov_-_Displace.ttf'
import './fonts/serebryakov_-_displace-webfont.woff'
import './fonts/serebryakov_-_displace-webfont.woff2'
import './styles.css'
import './fonts.css'

ReactDOM.render(
  <BrowserRouter>
  <DisplayProvider>
    <App />
    <Footer />
  </DisplayProvider>
  </BrowserRouter>,
  document.getElementById('root')
);




