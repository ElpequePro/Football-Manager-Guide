import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Football Manager Guide</h1>
      <p>Select a position from the menu to get started.</p>
      <Link to={`/football-manager-guide/Goalkeeper`}>
        Roles
      </Link>
    </div>
  );
};

export default Home;
