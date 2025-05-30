import React, { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Aside from './Aside';

import AttackingMidfielder from './Positions/AttackingMidfielder';
import Defender from './Positions/Defender';
import DefensiveMidfielder from './Positions/DefensiveMidfielder';
import FullBack from './Positions/FullBack';
import Goalkeeper from './Positions/Goalkeeper';
import Midfielder from './Positions/Midfielder';
import Striker from './Positions/Striker';
import WideMidfielder from './Positions/WideMidfielder';
import Winger from './Positions/Winger';
import WingBack from './Positions/WingBack';

const positionComponents = {
  attackingmidfielder: AttackingMidfielder,
  defender: Defender,
  defensivemidfielder: DefensiveMidfielder,
  fullback: FullBack,
  goalkeeper: Goalkeeper,
  midfielder: Midfielder,
  striker: Striker,
  widemidfielder: WideMidfielder,
  winger: Winger,
  wingback: WingBack,
};

const PositionPage = () => {
  const { position } = useParams();
  const location = useLocation();
  const roleRef = useRef(null);

  // Normalize position param by removing hyphens to match keys in positionComponents
  const normalizedPosition = position.toLowerCase().replace(/-/g, '');

  const PositionComponent = positionComponents[normalizedPosition];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  if (!PositionComponent) {
    return <div>Position "{position}" not found.</div>;
  }

  return (
    <>
      <Aside />
      <PositionComponent />
    </>
  );
};

export default PositionPage;
