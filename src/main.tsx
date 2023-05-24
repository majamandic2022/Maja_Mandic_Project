import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app.tsx';
import './i18n';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
