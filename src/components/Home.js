import React from 'react';
import '../styles/Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='banner__cards'>
      <Banner />
    
      <div className='cards'>
      <Card />
      <Card />
      <Card />

      </div>
    </div>
  );
}

export default Home;