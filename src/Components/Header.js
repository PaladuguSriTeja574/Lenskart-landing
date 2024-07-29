// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Lenskart</div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

export default Header;
