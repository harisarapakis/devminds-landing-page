import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';  // Use NavLink instead of Link
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="logo">
            <h1>DevMinds</h1>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink exact="true" to="/" className="nav-item" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-item" activeclassname="active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
