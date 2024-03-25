import React from 'react';
import '../styles/scss/Collapse.css';
import '../styles/scss/style.css'
import Banner from './Banner';
import bannerAbout from '../assets/banner-about.png';
import Collapse from './Collapse'; 
import aboutList from '../datas/aboutList.json';

function About() {
  return (
    <div>
      <div className='banner__cards'>
        <Banner imageSRC={bannerAbout} />
      </div>
      <div className='collapse__about'>
        {aboutList.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;