import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-content">
                {/* Formulario de contacto */}
                <div className="contact-form-container">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" id="subject" name="subject" placeholder="Enter the subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="contact-button">Send</button>
                    </form>
                </div>

                {/* Información de contacto */}
                <div className="contact-info">
                    <h2>Nuestra Ubicacion</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.798200239144!2d-58.71082652452303!3d-34.659798972934254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf4e89effee9%3A0x412d458823004b8b!2sSta.%20Fe%201061%2C%20B1718%20San%20Antonio%20de%20Padua%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1727055734921!5m2!1ses!2sar"
                        width="100%" height="250" allowFullScreen="" loading="lazy" title="Google Maps Location"
                    ></iframe>

                    <h2>Detalles de contacto</h2>
                    <ul className="contact-details">
                        <li><strong>Telefono:</strong> +5491165539808</li>
                        <li><strong>Email:</strong> info@salescenter.com</li>
                        <li><strong>Direccion:</strong> Santa fe 1063, San Antonio de Padua, Buenos Aires</li>
                    </ul>

                    <h2>Redes Sociales</h2>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon facebook">Facebook</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon instagram">Instagram</a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon twitter">Twitter</a>
                    </div>

                    <h2>FAQs</h2>
                    <ul className="faq-list">
                        <li>Como puedo hacer un seguimiento de mi pedido?</li>
                        <li>Cual es la politica de devoluciones?</li>
                        <li>Ofrecen envios gratis?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
