import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './css/Card.css';

const Card = ({ id, image, title, description, rating, price, onAddToCart  }) => {
    const item = { id, image, title, price };
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-info">
                <span className="rating">
                    <FontAwesomeIcon icon={faStar} /> {rating}
                </span>
                <span className="price">${price}</span>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => onAddToCart (item)} className="add-to-cart-button">
                <FontAwesomeIcon icon={faCartShopping} /> Agregar al Carrito
            </button>
        </div>
    );
};

export default Card;
