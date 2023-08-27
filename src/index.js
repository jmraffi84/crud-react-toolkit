import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Components/features/user';
import { Provider } from 'react-redux';
import userProfileListSlice from './Components/features/userprofilelist';


const store = configureStore({
  reducer: {
    user: userReducer,
    userList: userProfileListSlice,
  },
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />

    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
