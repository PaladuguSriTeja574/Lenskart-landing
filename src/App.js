// src/App.js
import React from 'react';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ProductSection from './Components/ProductSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
