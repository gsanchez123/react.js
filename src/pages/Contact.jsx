import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // Manejo del estado del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Manejar cambios en el formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Validar y enviar formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            setFormSubmitted(true);
            console.log('Formulario enviado:', formData);
            // añadir la funcionalidad para enviar los datos a un backend o servicio
        } else {
            setFormErrors(errors);
        }
    };

    // Función de validación
    const validateForm = (data) => {
        let errors = {};
        if (!data.name) errors.name = 'El nombre es obligatorio';
        if (!data.email) {
            errors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'El correo electrónico no es válido';
        }
        if (!data.subject) errors.subject = 'El asunto es obligatorio';
        if (!data.message) errors.message = 'El mensaje es obligatorio';
        return errors;
    };

    // Estado para manejar la sección de FAQs
    const [openQuestion, setOpenQuestion] = useState(null);

    // Toggle de las preguntas
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-content">
                {/* Formulario de contacto */}
                <div className="contact-form-container">
                    {formSubmitted ? (
                        <div className="success-message">¡Gracias por contactarnos! Te responderemos pronto.</div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                />
                                {formErrors.name && <p className="error">{formErrors.name}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                />
                                {formErrors.email && <p className="error">{formErrors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject:</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Enter the subject"
                                />
                                {formErrors.subject && <p className="error">{formErrors.subject}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Enter your message"
                                ></textarea>
                                {formErrors.message && <p className="error">{formErrors.message}</p>}
                            </div>
                            <button type="submit" className="contact-button">Send</button>
                        </form>
                    )}
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
                        <li><strong>Teléfono:</strong> <a href="tel:+5491165539808">+5491165539808</a></li>
                        <li><strong>Email:</strong> info@salescenter.com</li>
                        <li><strong>Direccion:</strong> Santa fe 1063, San Antonio de Padua, Buenos Aires</li>
                    </ul>

                    <h2>Redes Sociales</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">Twitter</a>
                    </div>

                    <h2>FAQs</h2>
                    <ul className="faq-list">
                        <li onClick={() => toggleQuestion(0)} className={openQuestion === 0 ? 'open' : ''}>
                            ¿Cómo puedo hacer un seguimiento de mi pedido?
                            {openQuestion === 0 && <p className="faq-answer">Puedes hacer seguimiento desde tu cuenta en nuestra web.</p>}
                        </li>
                        <li onClick={() => toggleQuestion(1)} className={openQuestion === 1 ? 'open' : ''}>
                            ¿Cuál es la política de devoluciones?
                            {openQuestion === 1 && <p className="faq-answer">Aceptamos devoluciones dentro de los 30 días de compra.</p>}
                        </li>
                        <li onClick={() => toggleQuestion(2)} className={openQuestion === 2 ? 'open' : ''}>
                            ¿Ofrecen envíos gratis?
                            {openQuestion === 2 && <p className="faq-answer">Sí, para pedidos superiores a $50.</p>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
