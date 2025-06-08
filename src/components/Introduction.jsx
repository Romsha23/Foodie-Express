import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Introduction.css';
import landingImage from '../assets/Landing_image_Desktop.jpg'; // ✅ Correct import

const Introduction = () => {
  const { theme } = useTheme(); // Get the current theme ('dark' or 'light')

  return (
    <section className={`introduction ${theme}`}>
      <div className="intro-content">
        <h1>Welcome to <span>Foodie</span> Express</h1>
        <p>Delicious food delivered hot and fresh right to your doorstep.</p>
        <a href="/restaurant/1" className="order-button">Order Now</a>
      </div>
      <div className="intro-image">
        <img src={landingImage} alt="Delicious Food" />
      </div>
    </section>
  );
};

export default Introduction;
