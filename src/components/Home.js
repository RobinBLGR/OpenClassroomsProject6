import React from 'react';
import '../styles/Home.css';
import Banner from './Banner';
import Card from './Card';
import logementsData from '../datas/logements.json'

function Home() {
  return (
    <div className='banner__cards'>
      <Banner />
    
      <div className='cards'>
      {logementsData.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
      </div>
    </div>
  );
}

export default Home;