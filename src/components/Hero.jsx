// components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Particles from 'react-tsparticles';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Sviluppatrice Full-Stack',
        'Specialista React js',
        'Appassionata di Web Development'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#0A66C2"
      },
      opacity: {
        value: 0.3
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        }
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="particles"
      />
      <Container>
        <Row className="align-items-center min-vh-100 p-0">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='themeHead'
            >
              <h1 className="display-4 fw-bold mb-4 ">
                Ciao, sono <span className="gradient-text">Debora Calvio</span>
              </h1>
              <h2 className="h3 mb-4">
                <span ref={el}></span>
              </h2>
              <p className="lead mb-4">
                Sono un appassionata sviluppatrice in continua evoluzione, alla ricerca di nuove sfide 
                e opportunità per ampliare le mie competenze nel mondo dello sviluppo web. 
                La mia curiosità e dedizione mi spingono a esplorare costantemente nuove tecnologie 
                e metodologie.
              </p>
            </motion.div>
          </Col>
          <Col lg={4} className="d-none d-lg-block">
            <div className="hero-pattern"></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;