// Home.js
import React, { useState, useEffect } from 'react';
import '../styles/scss/style.css';
import '../styles/scss/Home.css';
import Banner from './Banner';
import bannerHome from '../assets/banner-home.png';
import Card from './Card';
import logementsData from '../datas/logements.json';
import { Link } from 'react-router-dom';
import FicheLogement from './FicheLogement';

function Home() {
  const [logementSelectionne, setLogementSelectionne] = useState(null);
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData);
  }, []);

  const handleClickLogement = (logementId) => {
    const logement = logementsData.find((logement) => logement.id === logementId);
    setLogementSelectionne(logement);
  };

  return (
    <div className='banner__cards'>
      {logementSelectionne ? (
        <div className='fiche-logement'>
          <FicheLogement logement={logementSelectionne} />
        </div>
      ) : (
        <>
          <Banner imageSRC={bannerHome} text="Chez vous, partout et ailleurs" />
          <div className='cards'>
            {logementsData.map((logement) => (
              <Link key={logement.id} to={`/fiche/${logement.id}`}>
                <Card
                  logement={logement}
                  handleClickLogement={handleClickLogement}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;