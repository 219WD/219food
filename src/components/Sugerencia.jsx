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
                    src="https://i.imgur.com/Q09itKb.png"
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
