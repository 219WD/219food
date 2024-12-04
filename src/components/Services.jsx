import React from 'react';
import Service from './Service';
import { faCreditCard, faShippingFast, faHome } from '@fortawesome/free-solid-svg-icons';
import './css/Services.css'

const Services = () => {
    return (
        <section className="services">
            <h3>Te ofrecemos</h3>
            <div className="service-icons">
                <Service icon={faCreditCard} description="Formas de pago" size={2} />
                <Service icon={faShippingFast} description="Delivery gratuito" size={2} />
                <Service icon={faHome} description="Sin salir de tu casa" size={2} />
            </div>
        </section>
    );
};

export default Services;
