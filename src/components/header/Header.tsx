import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Pour effet sticky, ombre/fond si scrollY > 10
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo UATM-GASA" />
          <span className="navbar-brand">UATM-GASA</span>
        </div>
        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span><span></span><span></span>
        </button>
        {/* Menu */}
        <div className={`navbar-content ${isMenuOpen ? "open" : ""}`}>
          <nav className="navbar-links">
            <Link to="/" onClick={closeMenu}>Accueil</Link>
            <Link to="/faculte" onClick={closeMenu}>Facultés</Link>
            <Link to="/admissions" onClick={closeMenu}>Admissions</Link>
            <Link to="/recherche" onClick={closeMenu}>Recherche</Link>
            <Link to="/hebergement" onClick={closeMenu}>Hébergement</Link>
            <Link to="/informations" onClick={closeMenu}>Informations</Link>
          </nav>
        </div>
        {/* Dark/Light Button */}
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Mode sombre">
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </header>
      {/* Overlay */}
      <div className={`navbar-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}></div>
    </>
  );
};

export default Header;
