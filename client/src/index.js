import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';

import reportWebVitals from './reportWebVitals';
import ProductCard from './components/ProductCard';


// import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Login/> */}
    <Registration/>
    {/* <ProductCard/> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
