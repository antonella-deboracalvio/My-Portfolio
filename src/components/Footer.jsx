// components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whil eInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-0">
            © {currentYear} - Designed & Built with 
            <span className="gradient-text mx-1">❤</span> 
            by Debora Calvio
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;