// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`py-3 ${scrolled ? 'scrolled' : ''}`}
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="gradient-text"
          >
          
              <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' , borderRadius: '50%', padding: '2px', marginRight: '10px' }} />
          
            DevPortfolio
          </motion.span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Chi Sono</Nav.Link>
            <Nav.Link href="#projects">Progetti</Nav.Link>
            <Nav.Link href="#certificationSocial">Certificazione Aulab</Nav.Link>
            <Nav.Link href="#contact">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;