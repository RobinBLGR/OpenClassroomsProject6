import React, { useState } from 'react';
import '../styles/scss/Slideshow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isSingleImage = images.length === 1;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className={`slideshow-container ${isSingleImage ? 'single-image' : ''}`}>
      <img src={images[currentSlide]} alt="Logement" className="slideshow-image" />
      {!isSingleImage && (
        <div className="slideshow-controls">
          <button className="prevButton" onClick={prevSlide}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <span>{`${currentSlide + 1}/${images.length}`}</span>
          <button className="nextButton" onClick={nextSlide}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Slideshow;