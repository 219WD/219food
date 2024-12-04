import React from 'react';
import Card from './Card';
import './css/Cards.css';

const Cards = ({ addToCart }) => {
    return (
        <section className="menu">
            <h2>Sus Favoritas</h2>
            <p>Estas son nuestras hamburguesas más populares.</p>
            <div className="menu-cards">
                <Card
                    id={1}
                    image="https://i.imgur.com/JftOGbD.png"
                    title="Pattymelt"
                    description="Pan de molde, doble carne, doble cheddar, cebolla crispy, salsa de la casa."
                    rating="8.1"
                    price="12.000"
                    addToCart={addToCart}
                />
                <Card
                    id={2}
                    image="https://i.imgur.com/nP4kfsT.png"
                    title="Rodeo"
                    description="Doble carne, doble cheddar, bacon, dedos de muzzarella, salsa de la casa."
                    rating="9.2"
                    price="13.500"
                    addToCart={addToCart}
                />
                <Card
                    id={3}
                    image="https://i.imgur.com/dbecDlg.png"
                    title="Sinaloa"
                    description="Doble carne, pepinillos, guacamole, cebolla, lechuga, tomate, mayonesa."
                    rating="8.5"
                    price="12.500"
                    addToCart={addToCart}
                />
            </div>
        </section>
    );
};

export default Cards;