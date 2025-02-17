// components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // email
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch("https://formspree.io/f/mdkapnrb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });
  
    if (response.ok) {
      alert("Messaggio inviato con successo!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Errore nell'invio. Riprova più tardi.");
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section py-5 mt-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text mb-4">Contattami</h2>
              <p>
                Hai un progetto in mente? Parliamone!
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col lg={8}>
            <div className="contact-card">
              <Row>
                <Col md={5} className="contact-info">
                  <h3>Contatti</h3>
                  <div className="contact-details">
                    <div className="contact-item">
                      <FaEnvelope className="contact-icon" />
                      <div>
                        <h4>Email</h4>
                        <p>a.deboracalvio@gmail.com</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FaPhone className="contact-icon" />
                      <div>
                        <h4>Telefono</h4>
                        <p>+39 3297560298</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <FaMapMarkerAlt className="contact-icon" />
                      <div>
                        <h4>Località</h4>
                        <p>Italia</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={7} className=" mt-4">
                  <Form onSubmit={handleSubmit} className='contact-form' >
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Il tuo nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="La tua email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        placeholder="Il tuo messaggio"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="gradient-button w-100">
                      Invia Messaggio
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;