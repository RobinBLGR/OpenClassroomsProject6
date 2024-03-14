import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../assets/image-banner.png';

function Banner() {
    return (
        <div className='banner'>
        <img src={bannerImage} alt="Bannière du site Kasa" className='image__banner' />
        <div className='texte__banner'>
          Chez vous, partout et ailleurs
        </div>
     </div>
    );
  }

  export default Banner;