import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logementsData from '../datas/logements.json';
import '../styles/scss/FicheLogement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Collapse from './Collapse';
import Slideshow from './Slideshow';

function FicheLogement() {
  const { id } = useParams();
  const logement = logementsData.find((item) => item.id.toString() === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const { title, description, tags, equipments } = logement;

  const roundedRating = Math.round(logement.rating);
  const stars = [...Array(5)].map((_, index) => {
    const starClass = index < roundedRating ? 'star-filled' : 'star-empty';
    return <FontAwesomeIcon key={index} icon={faStar} className={`star ${starClass}`} />;
  });

  return (
    <div className='fiche__detaillee'>
        <Slideshow images={logement.pictures} />
      <div className='titre__host'>
        <div className='titre__info'>
        <h2>{title}</h2>
        <p>{logement.location}</p>
        <div className='tags'>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
        </div>
        </div>
      
        <div className='host__rating'>
            <div className='host__img'>
              <p>{logement.host.name}</p>
              <img src={logement.host.picture} alt="Image de l'hôte" />
            </div>
            <div>{stars}</div>
        </div>
      </div>

      <div className='description__equipements'>
        <Collapse title='Description' content={description} />
        <Collapse title='Equipements' content={equipments} />
      </div>
    </div>
  );
}

export default FicheLogement;