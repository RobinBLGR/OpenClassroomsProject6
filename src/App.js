import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import FicheLogement from './components/FicheLogement';

function App() {
  return (
    <BrowserRouter>
      <Header />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/fiche/:id" element={<FicheLogement />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
// FicheLogement le lien ne fonctionne pas, doit permettre depuis fiche d'aller sur page accueil
export default App;