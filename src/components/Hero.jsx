import React from 'react';
import './css/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ addToCart }) => {
  const specialProduct = {
    id: 999,
    image: 'https://i.imgur.com/1dp7XQB.png',
    title: 'Especial de la Casa',
    description: 'Bondiola de cerdo desmenuzada, morrones grillados, cebolla crispy, queso cheddar y salsa bbq.',
    price: 15000,
  };

  const handleAddToCart = () => {
    addToCart(specialProduct);
  };

  return (
    <section className="hero">
      <section className="txt">
        <h1>Probá el nuevo especial de la casa</h1>
        <p>{specialProduct.description}</p>
        <div className="buttons">
          <button className="btn-primary" onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartShopping} /> Añadir al Carrito
          </button>
          <button className="btn-secondary">Ver el Menú</button>
        </div>
      </section>
      <section className="img-container">
        <img src={specialProduct.image} alt="A bowl of delicious food" className="hero-img" />
      </section>
    </section>
  );
};

export default Hero;
