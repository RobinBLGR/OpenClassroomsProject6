import React from 'react';
import logo from '../assets/logo-footer-desktop.png';
import '../styles/scss/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      {/* Contenu du footer */}
      <img src={logo} alt="Logo du site Kasa" className="logo__footer" />
    </footer>
  );
}

export default Footer;