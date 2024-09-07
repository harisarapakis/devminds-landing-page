// About.js

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-header">
        <motion.div
          className="about-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>About DevMinds</h1>
          <p>We are passionate about building digital products that empower businesses.</p>
        </motion.div>
      </section>

      <section className="about-mission">
        <motion.div
          className="mission-content"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h2>Our Mission</h2>
          <p>
            At DevMinds, our mission is to help businesses transform their ideas into reality by creating custom websites and applications that stand out in the digital world. With innovation, creativity, and cutting-edge technology, we aim to build exceptional digital experiences that make an impact.
          </p>
        </motion.div>
      </section>

      <section className="about-team">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="team-container">
          <motion.div
            className="team-member"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
          >
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </motion.div>

          <motion.div
            className="team-member"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.7 }}
          >
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </motion.div>

          <motion.div
            className="team-member"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.9 }}
          >
            <img src="https://via.placeholder.com/150" alt="Team Member" />
            <h3>Michael Brown</h3>
            <p>UI/UX Designer</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
