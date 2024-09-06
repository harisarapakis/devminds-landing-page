// App.js

import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <motion.div
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src="logo.png" alt="DevMinds Logo" className="logo-image" />
          <h1 className="logo-text">DevMinds</h1>

        </motion.div>
        <motion.p
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="tagline"
        >
          Custom Websites and Apps for your Business
        </motion.p>
      </header>

      <section className="services">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          What We Offer
        </motion.h2>
        <motion.div
          className="service-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        >
          <div className="service">
            <img src="website.png" alt="Website Design" />
            <h3>Custom Websites</h3>
            <p>Beautifully designed websites tailored to your needs.</p>
          </div>
          <div className="service">
            <img src="mobile.png" alt="Mobile Apps" />
            <h3>Mobile Apps</h3>
            <p>High-quality mobile applications for iOS and Android.</p>
          </div>
          <div className="service">
            <img src="ui-ux.png" alt="UI/UX Design" />
            <h3>UI/UX Design</h3>
            <p>Engaging and user-friendly designs that stand out.</p>
          </div>
        </motion.div>
      </section>

      <section className="cta">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
          Get Started
        </motion.button>
      </section>

      <footer className="footer">
        <p>© 2024 DevMinds | Custom Sites & Apps</p>
      </footer>
    </div>
  );
};

export default App;
