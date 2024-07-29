// src/components/ProductShowcase.js
import React from 'react';
import './ProductSection.css';

const products = [
  { id: 1, name: 'Eyeglasses', image: 'https://source.unsplash.com/200x200/?eyeglasses', price: '$50' },
  { id: 2, name: 'Sunglasses', image: 'https://source.unsplash.com/200x200/?sunglasses', price: '$75' },
  { id: 3, name: 'Contact Lenses', image: 'https://source.unsplash.com/200x200/?contact-lenses', price: '$30' },
];

const ProductShowcase = () => (
  <section className="product-showcase">
    <h2>Featured Products</h2>
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductShowcase;
