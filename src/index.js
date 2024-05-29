import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='*' element={<App />}>
    </Route></Routes>
    <Footer title="Anime Blogger"
    description="Nakama's Feel Free To Connect  " />
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
