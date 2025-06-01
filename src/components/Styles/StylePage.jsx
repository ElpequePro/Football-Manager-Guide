import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Aside from './Aside';
import Style from './Styles.jsx';

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
      <Style />
    </>
  );
};

export default PositionPage;
