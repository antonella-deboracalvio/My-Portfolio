// src/App.jsx
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/global.css';
import './styles/theme.css';
import CertificationsSocial from './components/CertificationSocial';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <CertificationsSocial />
          <Contact />
        </main>
        <Footer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;