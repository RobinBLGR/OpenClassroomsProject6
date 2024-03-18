import React from 'react';
import '../styles/scss/FicheLogement.css'
import host from '../assets/host.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function FicheLogement({ logement }) {
  const { tags } = logement;

  const roundedRating = Math.round(logement.rating);
  const stars = [...Array(5)].map((_, index) => {
    const starClass = index < roundedRating ? 'star-filled' : 'star-empty';
    return <FontAwesomeIcon key={index} icon={faStar} className={`star ${starClass}`} />;
  });
  
  return (
    <div className='fiche__detaillee'>
      <img src={logement.cover} alt={logement.title} />
        <div className='titre__host'>
          <div className='titre__location'>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <div className='host__name'>
            <p>{logement.host.name}</p>
            <img src={host} alt="Nom de l'hôte" className='host__logo' />
          </div>
        </div>
        <div className='tags__rating'>
          <div className='tags'>
            {tags.map((tag, index) => (
            <button key={index}>{tag}</button>
            ))}
          </div> 
          <div> {stars}</div>
        </div>
    </div>
  );
};

export default FicheLogement;