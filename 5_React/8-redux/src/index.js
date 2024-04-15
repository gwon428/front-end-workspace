import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { legacy_createStore as createStore } from 'redux';
import store from './store';
import { Provider } from 'react-redux';

/*
// 1. 스토어 생성
const storeCreate = createStore(store);
*/

// 스토어 관리할 아이


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);