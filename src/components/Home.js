import React from 'react';
import '../styles/scss/style.css'
import '../styles/scss/Home.css';
import Banner from './Banner';
import bannerHome from '../assets/banner-home.png'
import Card from './Card';
import logementsData from '../datas/logements.json'

function Home() {
  return (
    <div className='banner__cards'>
      <Banner imageSRC={bannerHome} text="Chez vous, partout et ailleurs"/>
    
      <div className='cards'>
      {logementsData.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
      </div>
    </div>
  );
}

export default Home;