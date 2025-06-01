import React, { useState, useEffect } from 'react';
import './Aside.css';
import { IoIosArrowForward } from 'react-icons/io';
import { useParams, Link, useNavigate } from 'react-router-dom';

import StylesData from './styles.json';


function generateId(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
}

function Aside() {
  const { position } = useParams();
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (position) {
      const normalizedPosition = position.toLowerCase().replace(/-/g, '');
      const matchedPosition = StylesData.find((pos) =>
        generateId(pos.position).replace(/-/g, '') === normalizedPosition
      );
      if (matchedPosition) {
        setExpanded(matchedPosition.position);
      } else {
        setExpanded(null);
      }
    } else {
      setExpanded(null);
    }
  }, [position]);

  const toggleExpanded = (name) => {
    if (expanded === name) {
      setExpanded(null);
      navigate('/football-manager-guide/');
      window.scrollTo(0, 0);
    } else {
      setExpanded(name);
      const positionSlug = generateId(name);
      navigate(`/football-manager-guide/${positionSlug}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <aside className="aside-container rounded-xl">
      <nav>
        <ul className="aside-nav">
          <li className="position-item"><Link className='position-button' to={'/football-manager-guide/'}>Home</Link></li>
          {StylesData.map((pos) => (
            <li key={pos.position} className="position-item">
              <button className="position-button">
                {pos.position}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
