import React from 'react';
import ReactDOM from 'react-dom';
import GlobalFonts from './fonts/fonts'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes/> <GlobalFonts/>
  </React.StrictMode>,
  document.getElementById('root')
);