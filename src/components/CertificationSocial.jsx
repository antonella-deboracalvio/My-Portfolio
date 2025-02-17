// components/CertificationsSocial.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin,FaAward } from 'react-icons/fa';

const CertificationsSocial = () => {
  const socials = [
    { icon: FaGithub, link: "https://github.com/antonella-deboracalvio", name: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/debora-calvio-a51104315/", name: "LinkedIn" },
  ];

  return (
    <section id="certificationSocial" className="certifications-social py-5 mt-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="gradient-text mb-4">Certificazioni</h2>
            </motion.div>
          </Col>
        </Row>
        
        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <motion.div 
              className="certification-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="d-flex align-items-center">
                <div className="cert-icon">
                  <FaAward size={40} className="gradient-icon" />
                </div>
                <div className="cert-info ms-4">
                  <h3>Full Stack Developer</h3>
                  <p className="mb-0">Aulab</p>
                  <small>Gennaio 2025</small>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center mt-5">
          <Col lg={6}>
            <h3 className="mb-4 mx-5 gradient-text">Seguimi sui Social</h3>
            <div className="social-links">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="social-link mx-3"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className='mx-1' />
                  <span className="social-name">{social.name}</span>
                
                </motion.a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CertificationsSocial;