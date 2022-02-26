import React from 'react';
import ReactDOM from 'react-dom';
import Popper from '@popperjs/core';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter } from "react-router-dom";
import { DisplayProvider } from './components/DisplayContext';
import App from './App';
import Footer from './components/Footer'
import PaloSanto from './fonts/PaloSanto.eot'
import Displace from './fonts/Serebryakov-Displace.eot'
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




