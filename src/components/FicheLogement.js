import React from 'react';
import '../styles/scss/FicheLogement.css'
import host from '../assets/host.png';

const FicheLogement = ({ logement }) => {
  return (
    <div className='fiche__detaillee'>
        <div className='titre__location'>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
        </div>
        <div className='host__name'>
             <p>{logement.host.name}</p>
             <img src={host} alt="Nom de l'hôte" className='host__logo' />
        </div>
    </div>
  );
};

export default FicheLogement;