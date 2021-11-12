import React from 'react';
import ReactDOM from 'react-dom';
import GlobalFonts from './fonts/fonts';
import Routes from './routes';
import Map from '../../tcc/src/components/comum/google_maps/index';



ReactDOM.render(
  <React.StrictMode>
    <Routes/> <GlobalFonts/> <Map/>
  </React.StrictMode>,
  document.getElementById('root')
);