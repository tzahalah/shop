import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {thunk} from 'redux-thunk'
import {store} from './comp/App/Store'
import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
const root = ReactDOM.createRoot(document.getElementById('root'));

//let x= createStore(combineReducers({}), composeWithDevTools(applyMiddleware(thunk)))
root.render(
 // <React.StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
