import React from 'react';
import ReactDOM from 'react-dom/client'; // note the '/client' import
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
