import React from 'react';
import ReactDOM from 'react-dom/client';

// Stylesheets
import 'foundation-sites/dist/css/foundation.min.css'
import "./assets/app.scss"
import "./assets/index.scss"

import App from './app/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
