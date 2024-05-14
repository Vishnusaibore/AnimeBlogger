import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <Header/>
    <App />
    <Footer title="Anime Blogger"
    description="Nakama's Feel Free To Connect  " />
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
