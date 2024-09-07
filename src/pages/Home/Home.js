
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
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
          Building Digital Experiences with Innovation
        </motion.p>
      </header>

      <section className="services">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="section-title"
        >
          Our Expertise
        </motion.h2>
        <motion.div
          className="service-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        >
          <div className="service">
            <img src="custom-website.png" alt="Website Design" />
            <h3>Custom Websites</h3>
            <p>Unique websites tailored to your vision.</p>
          </div>
          <div className="service">
            <img src="mobile-app.png" alt="Mobile Apps" />
            <h3>Mobile Apps</h3>
            <p>Mobile solutions for iOS and Android users.</p>
          </div>
          <div className="service">
            <img src="ui-ux-design.png" alt="UI/UX Design" />
            <h3>UI/UX Design</h3>
            <p>Creative designs that offer superior user experience.</p>
          </div>
        </motion.div>
      </section>

      <section className="cta">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#4A90E2' }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
          Start Your Project
        </motion.button>
      </section>

      <footer className="footer">
        <p>© 2024 DevMinds | Elevating Digital Experiences</p>
      </footer>
    </div>
  );
};

export default Home;
