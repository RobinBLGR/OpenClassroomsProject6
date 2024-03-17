import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/scss/NotFound.css'
import '../styles/scss/style.css'

function NotFound() {
  return (
    <div className='error'>
      <h2>404</h2>
      <p>Oups! La page que vous avez demandé n'existe pas.</p>
      <div className='retour'>
        <Link to="/" className='back__link'>Retourner sur la page d'accueil</Link>
        </div>
    </div>
  );
}

export default NotFound;