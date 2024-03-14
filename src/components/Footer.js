import React from 'react';
import logo from '../assets/logo-footer.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className='footer'>
      {/* Contenu du footer */}
      <img src={logo} alt="Logo du site Kasa" className="logo__footer" />
    </footer>
  );
}

export default Footer;