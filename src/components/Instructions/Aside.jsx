import React, { useState, useEffect } from 'react';
import './Aside.css';
import { IoIosArrowForward } from 'react-icons/io';
import { useParams, Link, useNavigate } from 'react-router-dom';

import positionsData from './instructions.json';


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
      const matchedPosition = positionsData.find((pos) =>
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
      const instructionSlug = generateId(name);
      navigate(`/football-manager-guide/instructions/${instructionSlug}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <aside className="aside-container rounded-xl">
      <nav>
        <ul className="aside-nav">
          <li className="position-item"><Link className='position-button' to={'/football-manager-guide/'}>Home</Link></li>
          {positionsData.map((pos) => (
            <li key={pos.position} className="position-item">
              <button
                onClick={() => toggleExpanded(pos.position)}
                className="position-button"
                aria-expanded={expanded === pos.position}
                aria-controls={`${generateId(pos.position)}-roles`}
              >
                {pos.position}
                <IoIosArrowForward className={`icon ${expanded === pos.position ? 'open' : ''}`} />
              </button>
              {expanded === pos.position && (
                <ul
                  id={`${generateId(pos.position)}-roles`}
                  className="roles-list"
                >
                  {pos.roles.map((role) => {
                    const instructionSlug = generateId(pos.position);
                    return (
                      <li key={role.role} className="role-item">
                        <Link
                          to={`/football-manager-guide/instructions/${instructionSlug}#${generateId(role.role)}-role`}
                          className="role-link"
                        >
                          {role.role}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
