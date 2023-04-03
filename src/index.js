import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './reduxtoolkit/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
//here we will use provide of reduxtoolkit to make available store in alll children components
root.render(
    <Provider store={store}>
      <App />
    </Provider>

  
);

