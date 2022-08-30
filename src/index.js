import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter> 
      <App /> 
   </BrowserRouter>
);



// this is old and render has since been deprecated??

// const router = <BrowserRouter> <App /> </BrowserRouter>

// ReactDOM.render(router, document.getElementById('root'));



// this is the way we were rendering before ROUTER.

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


