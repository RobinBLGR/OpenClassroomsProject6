import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/scss/Collapse.css';

function Collapse({ title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={handleToggle}>
        <h3>{title}</h3>
        <span className={`collapse__icon ${isCollapsed ? '' : 'rotate'}`}>
          <FontAwesomeIcon
            icon={isCollapsed ? faAngleDown : faAngleUp}
            className="collapse__arrow"
          />
        </span>
      </div>
      {!isCollapsed && (
        <div className="collapse__content">
          {Array.isArray(content) ? (
            <ul className="equipments__list">
              {content.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) : (
            <div>{content}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;