import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


// TODO: Bug tracker could be any
Sentry.init({
  dsn: "<your_DSN_key>",
  integrations: [new Sentry.BrowserTracing(), Sentry.replayIntegration()],
})


root.render(
  <App/>
  ,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
