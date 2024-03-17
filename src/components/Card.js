import React from 'react';
import '../styles/scss/Card.css';

const Card = ({ id, title, cover, handleClickLogement }) => {
  const handleClick = () => {
    handleClickLogement(id);
  };

  return (
    <div className='card' onClick={handleClick}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;