import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App2';
import reportWebVitals from './reportWebVitals';
import LoginComponent from './LoginComponent';
import LoginService from './services/LoginService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const loginService = new LoginService();

const setToken = (token: string) =>{
  console.log(`received the token ${token}`);
}

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <LoginComponent loginService={loginService} setToken={setToken} /> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
