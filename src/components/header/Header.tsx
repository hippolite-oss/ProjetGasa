import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logo.png";
import "./Header.css";

const translations: Record<string, Record<string, string>> = {
  fr: {
    home: "ACCUEIL",
    faculties: "FACULTÉS",
    about: "À PROPOS",
    equipement: "ÉQUIPEMENTS",
    contact: "CONTACT",
  },
  en: {
    home: "HOME",
    faculties: "FACULTIES",
    about: "ABOUT",
    equipement: "EQUIPMENT",
    contact: "CONTACT",
  },
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  useEffect(() => {
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

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

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
            <Link to="/" onClick={closeMenu}>{translations[language].home}</Link>
            <Link to="/faculties" onClick={closeMenu}>{translations[language].faculties}</Link>
            <Link to="/About" onClick={closeMenu}>{translations[language].about}</Link>
            <Link to="/Equipement" onClick={closeMenu}>{translations[language].equipement}</Link>
            <Link to="/Contact" onClick={closeMenu}>{translations[language].contact}</Link>
          </nav>
        </div>

        {/* Buttons */}
        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Mode sombre">
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {/* Sélecteur de langue */}
          <button onClick={toggleLanguage} className="lang-toggle" aria-label="Changer la langue">
            {language === "fr" ? "FR" : "EN"}
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`navbar-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;
