import React from 'react';
import './css/Sugerencia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils';
import { Link } from 'react-router-dom';

const Sugerencia = () => {
    return (
        <section className="sugerencia">
            <section className="image-section">
                <img
                    src="https://res.cloudinary.com/dtxdv136u/image/upload/v1733412573/Q09itKb_twvlj6.webp"
                    alt="Combo de hamburguesa con papas y gaseosa"
                    className="image-sugerencia"
                />
            </section>
            <section className="description">
                <h2>Vení a conocer nuestro menú</h2>
                <p>
                    Descubrí las mejores hamburguesas, combos y acompañamientos que tenemos para vos.
                </p>
                <Link to="/menu" className="menu-link">
                    <button>
                        <FontAwesomeIcon icon={faUtensils} /> Ver Menú
                    </button>
                </Link>
            </section>
        </section>
    );
};

export default Sugerencia;
