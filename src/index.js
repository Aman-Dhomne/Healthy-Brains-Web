import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

import { registerLicense } from '@syncfusion/ej2-base';
// Replace YOUR_LICENSE_KEY with your actual key string
registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCekx1RXxbf1x1ZFFMZFxbQXNPIiBoS35Rc0VnW3xfdnBVQ2VaUkF2VEBU');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();