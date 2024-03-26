import React from 'react';
import logo from '../assets/logo-footer.png';
import '../styles/scss/Footer.css';
import '../styles/scss/style.css'

function Footer() {
  return (
    <footer className='footer'>
      {/* Contenu du footer */}
      <img src={logo} alt="Logo du site Kasa" className="logo__footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;