import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/tabletStyles.css'
import './styles/mobileStyles.css'
import './styles/desktopStyles.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
