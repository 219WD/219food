import React from 'react';
import Card from './Card';
import './css/Cards.css';

const Cards = ({ onAddToCart }) => {
    return (
        <section className="menu">
            <h2>Sus Favoritas</h2>
            <p>Estas son nuestras hamburguesas más populares.</p>
            <div className="menu-cards">
                <Card
                    id={1}
                    image="https://res.cloudinary.com/dtxdv136u/image/upload/v1733412574/JftOGbD_aa1ogq.webp"
                    title="Pattymelt"
                    description="Pan de molde, doble carne, doble cheddar, cebolla crispy, salsa de la casa."
                    rating="8.1"
                    price="12000"
                    onAddToCart={onAddToCart} 
                />
                <Card
                    id={2}
                    image="https://res.cloudinary.com/dtxdv136u/image/upload/v1733412575/nP4kfsT_qzrrkn.webp"
                    title="Rodeo"
                    description="Doble carne, doble cheddar, bacon, dedos de muzzarella, salsa de la casa."
                    rating="9.2"
                    price="13500"
                    onAddToCart={onAddToCart} 
                />
                <Card
                    id={3}
                    image="https://res.cloudinary.com/dtxdv136u/image/upload/v1733412574/dbecDlg_1_ecjgvi.webp"
                    title="Sinaloa"
                    description="Doble carne, pepinillos, guacamole, cebolla, lechuga, tomate, mayonesa."
                    rating="8.5"
                    price="12500"
                    onAddToCart={onAddToCart} 
                />
            </div>
        </section>
    );
};

export default Cards;
