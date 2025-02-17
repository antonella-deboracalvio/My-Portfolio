// src/components/ThemeToggle.jsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
    </motion.button>
  );
};

export default ThemeToggle;