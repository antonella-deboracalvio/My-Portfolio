// components/Projects.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Presto from "../assets/Presto.jpg";
import GameFrame from "../assets/GameFrame.jpg";


const Projects = () => {
  const projects = [
    {
      title: "Presto",
      description: "Il progetto simula una piattaforma di e-commerce per la vendita di prodotti di seconda mano.",
      tech: ["React", "Redux", "Node.js", "Socket.io"],
      image: Presto,
    },
    {
      title: "GameFrame",
      description: "Applicazione meteo con geolocalizzazione e previsioni dettagliate a 7 giorni.",
      tech: ["React", "OpenWeather API", "Styled-Components"],
      image: GameFrame,
    }
  ];
  // link: "https://debora-calvio-progetto-finale.vercel.app/"
  return (
    <section id="projects" className="projects-section py-5 mt-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Row className="justify-content-center text-center mb-5 mt-5">
            <Col lg={6}>
              <h2 className="gradient-text mb-4 mt-5">I Miei Progetti</h2>
              <p>
                Una selezione dei progetti più significativi che ho sviluppato
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center text-center g-5">
            {projects.map((project, index) => (
              <Col key={index}>
                <motion.div
                  className="project-card"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="project-image">
                  
                    <img src={project.image} alt={project.title} className="img-fluid" />
          
                    <div className="project-links">
                      <a href="https://github.com/antonella-deboracalvio" className="project-link" title="View Code">
                        <FaGithub />
                      </a>
                      <a href={project.link} className="project-link ms-2" title="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag mx-1">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;