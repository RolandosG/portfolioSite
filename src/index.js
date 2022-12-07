import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';


import { AppProvider } from './context/appContext';

import HomePage from "../src/pages/HomePage";
import Error from "../src/pages/Error";
import About from "../src/pages/About";
import Portfolio from "../src/pages/Portfolio";

export{
    HomePage, About, Portfolio, Error
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <AppProvider>
    <App />
  </AppProvider>
  </React.StrictMode>
);
