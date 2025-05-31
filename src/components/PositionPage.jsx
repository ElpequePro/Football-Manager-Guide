import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Aside from './Aside';
import Positions from './Positions/Positions';

const PositionPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Aside />
      <Positions />
    </>
  );
};

export default PositionPage;
