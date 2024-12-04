import React, { useState } from 'react';
import './css/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = ({ cartCount, toggleCartVisibility }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">219Food</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/menu">Menu</Link>
        <Link to="/about">Acerca de Nosotros</Link>
      </nav>
      <button className="cart-button" onClick={toggleCartVisibility}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
};

export default NavBar;
