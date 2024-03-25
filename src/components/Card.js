import React from 'react';
import '../styles/scss/Card.css';
import { Link } from 'react-router-dom';

const Card = ({ logement, handleClickLogement }) => {
  const { id, title, cover } = logement;

  const handleClick = () => {
    handleClickLogement(id);
  };

  return (
    <Link to={`/fiche/${id}`} className='card' onClick={handleClick}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;