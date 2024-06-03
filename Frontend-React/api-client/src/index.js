import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/login';
import reportWebVitals from './reportWebVitals';
import Header from './components/header'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NoPage from "./components/noPage"
import Signup from './components/signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
const Rooting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )

}
root.render(
  <>
    <Header />
    <Rooting />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
