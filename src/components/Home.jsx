import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <main className="home-container">
      <h1 className="home-title">
        Welcome to the Football Manager Guide
      </h1>
      <nav className="home-nav">
        <Link
          to="/football-manager-guide/positions"
          className="home-link rounded"
        >
          Positions/Roles
        </Link>
        <Link
          to="/football-manager-guide/instructions"
          className="home-link rounded"
        >
          Player Instructions
        </Link>
        <Link
          to="/football-manager-guide/styles"
          className="home-link rounded"
        >
          Styles
        </Link>
      </nav>
    </main>
  );
};

export default Home;
