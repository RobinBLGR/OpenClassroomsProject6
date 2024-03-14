import React from 'react';
import '../styles/Card.css';

function Card({ id, title, cover }) {
  return (
    <div className='card'>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

  export default Card;
