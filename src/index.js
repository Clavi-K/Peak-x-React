import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/style2.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js'

ReactDOM.render(
  <React.StrictMode >

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
      rel="stylesheet"
    />

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();