import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <div className="logo">219Food</div>
            </div>
            <div className="footer-content">
                <h5>Seguinos en nuestras redes</h5>
                <div className="social-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="icon" />
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                    </a>
                </div>
                <p className="footer-hours">
                    Horario de atención: <br />
                    Lunes a jueves de 20:00 a 00:00 <br />
                    Viernes a domingo de 20:00 a 02:00
                </p>
            </div>
        </footer>
    );
};

export default Footer;
