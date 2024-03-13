import React from 'react';
import banner from '../assets/image-banner.png';
import '../styles/Banner.css';

function Banner() {
    return (
        <banner className='banner'>
            <img src={banner} alt="Bannière du site Kasa" className='image__banner' />
        </banner>
    )
}

export default Banner;