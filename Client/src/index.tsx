import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app"
import GlobalStyle from "./globalCSS"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

