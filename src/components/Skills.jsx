// components/Skills.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaDatabase, FaLaravel, FaGitAlt, FaPhp 
} from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
    { icon: FaJs, name: 'JavaScript', color: '#F7DF1E' },
    { icon: FaPhp, name: 'PHP', color: '#CB3837' },
    { icon: FaReact, name: 'React', color: '#61DAFB' },
    { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    { icon: FaDatabase, name: 'Supabase', color: '#339933' },
    { icon: FaLaravel, name: 'Laravel', color: '#47A248' },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Row className="justify-content-center text-center mb-5 pt-5">
            <Col lg={6}>
              <h2 className="gradient-text ">Tecnologie</h2>
              <p>
                Le principali tecnologie e strumenti che utilizzo
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            {skills.map((skill, index) => (
              <Col key={index} xs={6} sm={4} md={3}>
                <motion.div
                  className="skill-item text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <skill.icon size={50} color={skill.color} />
                  <h5 className="mt-3">{skill.name}</h5>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;