import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact';
import Header from "./components/partials/Header"
import Footer from "./components/partials/Footer"
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
        <Route path="/" element={<Home
        text="Hello This is Home Page" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
