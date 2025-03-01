import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css'
import App from './App.jsx'
// import store from "./Redux/Store.js";
// import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
