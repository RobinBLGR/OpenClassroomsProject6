import React, { useState } from 'react';
import '../styles/scss/Slideshow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  // Vérifier s'il y a une seule image
  if (images.length === 1) {
    return (
      <div>
        <div>
          <img src={images[currentSlide]} alt="Logement" />
        </div>
      </div>
    );
  }

  return (
    <div className="slideshow-container">
      <div>
        <img src={images[currentSlide]} alt="Logement" className="slideshow-image" />
      </div>
      <div className="slideshow-controls">
        {images.length > 1 && (
          <>
            <button className="prevButton" onClick={prevSlide}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <span>{`${currentSlide + 1}/${images.length}`}</span>
            <button className="nextButton" onClick={nextSlide}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Slideshow;