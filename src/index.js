import 'core-js/es' 
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router';
import reportWebVitals from './reportWebVitals';
import "./assets/js/zepto.js";
import "./assets/styles/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
