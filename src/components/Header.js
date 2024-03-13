import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-header.png';
import '../styles/header.css';

function Header() {
    return (
        <header className='header'>
            <img src={logo} alt="Logo du site Kasa" className='logo__header' />
            <nav className='nav'>
                 <li>
                 <Link to="/" className="nav__link">Accueil</Link>
                </li>
                <li>
                    <Link to="/about" className="nav__link">À propos</Link>
                 </li>
            </nav>
        </header>
    );
  }
  
export default Header;