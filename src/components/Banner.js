import React from 'react';
import '../styles/scss/Banner.css'; 

function Banner({ imageSRC, text }) {
    return (
        <div className='banner'>
        <img src={imageSRC} alt="Bannière du site Kasa" />
        <h2 className='texte__banner'>{text}</h2>
     </div>
    );
  }

  export default Banner;