import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/login'
import GlobalFonts from './fonts/fonts'

ReactDOM.render(
  <React.StrictMode>
    <Login /> <GlobalFonts/>
  </React.StrictMode>,
  document.getElementById('root')
);