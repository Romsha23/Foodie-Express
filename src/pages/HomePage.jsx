import React from 'react';
import { restaurants } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';
import Introduction from '../components/Introduction'; // ✅ Import it
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container">
      {/* ✅ Insert Introduction section at the top or where you want it */}
      <Introduction /> 

      <div className="hero-section">
        <h1>Food delivery to your doorstep</h1>
        <p>Choose your favorite meals from the best restaurants in town</p>
      </div>
      
      <section className="restaurants-section">
        <h2>Popular Restaurants</h2>
        <div className="restaurants-grid">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
