import React from 'react';
import { Link } from 'react-router-dom';

const positions = [
  'AttackingMidfielder',
  'Defender',
  'DefensiveMidfielder',
  'FullBack',
  'Goalkeeper',
  'Midfielder',
  'Striker',
  'WideMidfielder',
  'Winger',
  'WingBack',
];

function camelCaseToHyphen(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

const Home = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Football Manager Guide</h1>
      <p>Select a position from the menu to get started.</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {positions.map((pos) => (
          <li key={pos} style={{ margin: '0.5rem 0' }}>
            <Link to={`/football-manager-guide/${camelCaseToHyphen(pos)}`} style={{ textDecoration: 'none', color: 'blue' }}>
              {pos}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
