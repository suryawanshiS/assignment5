// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import CartPage from './Components/CartPage';
import Navbar from './Components/NavBar';
import './App.css';



const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-mode');
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

