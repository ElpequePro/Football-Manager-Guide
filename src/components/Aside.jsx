import React, { useState, useEffect } from 'react';
import './Aside.css';
import { IoIosArrowForward } from 'react-icons/io';
import { useParams, Link } from 'react-router-dom';

const positions = [
  {
    name: 'Goalkeeper',
    roles: ['Goalkeeper', 'Sweeper Keeper'],
  },
  {
    name: 'Defender',
    roles: [
      'Central Defender',
      'Libero',
      'Ball Playing Defender',
      'No-Nonsense Centre-Back',
      'Wide Centre-Back',
    ],
  },
  {
    name: 'Full-Back',
    roles: [
      'Full-Back',
      'Wing-Back',
      'No-Nonsense Full-Back',
      'Complete Wing-Back',
      'Inverted Wing-Back',
      'Inverted Full-Back',
    ],
  },
  {
    name: 'Wing-Back',
    roles: [
      'Wing-Back',
      'Complete Wing-Back',
      'Inverted Wing-Back',
    ],
  },
  {
    name: 'Defensive Midfielder',
    roles: [
      'Defensive Midfielder',
      'Deep Lying Playmaker',
      'Ball Winning Midfielder',
      'Anchor',
      'Half Back',
      'Regista',
      'Roaming Playmaker',
      'Segundo Volante',
    ],
  },
  {
    name: 'Midfielder',
    roles: [
      'Central Midfielder',
      'Deep Lying Playmaker',
      'Box To Box Midfielder',
      'Advanced Playmaker',
      'Ball Winning Midfielder',
      'Roaming Playmaker',
      'Mezzala',
      'Carrilero',
    ],
  },
  {
    name: 'Wide Midfielder',
    roles: [
      'Wide Midfielder',
      'Winger',
      'Defensive Winger',
      'Wide Playmaker',
      'Inverted Winger',
    ],
  },
  {
    name: 'Attacking Midfielder',
    roles: [
      'Attacking Midfielder',
      'Advanced Playmaker',
      'Trequartista',
      'Enganche',
      'Shadow Striker',
    ],
  },

  {
    name: 'Winger',
    roles: [
      'Winger',
      'Advanced Playmaker',
      'Inside Forward',
      'Trequartista',
      'Wide Target Forward',
      'Raumdeuter',
      'Inverted Winger',
    ],
  },
  {
    name: 'Striker',
    roles: [
      'Deep Lying Forward',
      'Advanced Forward',
      'Target Forward',
      'Poacher',
      'Complete Forward',
      'Pressing Forward',
      'Trequartista',
      'False Nine',
    ],
  },
];

function generateId(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
}

function Aside() {
  const { position } = useParams();
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (position) {
      // Normalize the position param by lowercasing and removing hyphens to match generateId output
      const normalizedPosition = position.toLowerCase().replace(/-/g, '');
      // Find the position name that matches the normalized URL param after removing hyphens
      const matchedPosition = positions.find((pos) =>
        generateId(pos.name).replace(/-/g, '') === normalizedPosition
      );
      if (matchedPosition) {
        setExpanded(matchedPosition.name);
      } else {
        setExpanded(null);
      }
    } else {
      setExpanded(null);
    }
  }, [position]);

  const toggleExpanded = (name) => {
    setExpanded(expanded === name ? null : name);
  };

  return (
    <aside className="aside-container rounded-xl">
      <nav>
        <ul className="aside-nav">
          <li className="position-item"><Link className='position-button' to={'/football-manager-guide/'}>Home</Link></li>
          {positions.map((pos) => (
            <li key={pos.name} className="position-item">
              <button
                onClick={() => toggleExpanded(pos.name)}
                className="position-button"
                aria-expanded={expanded === pos.name}
                aria-controls={`${generateId(pos.name)}-roles`}
              >
                {pos.name}
                <IoIosArrowForward className={`icon ${expanded === pos.name ? 'open' : ''}`} />
              </button>
              {expanded === pos.name && (
                <ul
                  id={`${generateId(pos.name)}-roles`}
                  className="roles-list"
                >
                  {pos.roles.map((role) => {
                    const positionSlug = generateId(pos.name);
                    return (
                      <li key={role} className="role-item">
                        <Link
                          to={`/football-manager-guide/${positionSlug}#${generateId(role)}-role`}
                          className="role-link"
                        >
                          {role}
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
