import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp value={10} />
    {/*     <PrimeraApp saludo="holamundo" /> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
