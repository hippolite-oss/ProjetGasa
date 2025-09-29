import React, { useEffect } from "react";
import "./Hebergement.css";

// Hook personnalisé pour les animations au défilement
const useScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight - 100 && elementBottom > 0;
        
        if (isVisible) {
          element.classList.add('animated');
        }
      });
    };

    // Animation initiale
    animateOnScroll();
    
    // Animation au défilement avec debounce pour la performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          animateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

const Hebergement: React.FC = () => {
  // Utilisation du hook d'animation
  useScrollAnimation();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Hébergement Étudiant</h1>
            <p className="hero-subtitle">
              Découvrez nos résidences étudiantes modernes et confortables pour un séjour agréable
            </p>
            <a href="#accommodations" className="btn btn-hero">
              Voir nos résidences
            </a>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="accommodations" className="main-section">
        <div className="container">
          <h2 className="section-title">Nos Résidences Étudiantes</h2>
          <p className="section-subtitle">
            Nous proposons différents types d'hébergement adaptés à tous les besoins et budgets
          </p>
          <div className="row g-4">
            {/* Résidence 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="accommodation-card animate-on-scroll">
                <div className="position-relative">
                  <img
                    src="https://img.freepik.com/free-photo/modern-dormitory-room_23-2148983691.jpg"
                    className="accommodation-img"
                    alt="Résidence Campus"
                    loading="lazy"
                  />
                  <div className="accommodation-badge">Disponible</div>
                </div>
                <div className="accommodation-body">
                  <h3 className="accommodation-title">Résidence Campus</h3>
                  <p className="accommodation-location">
                    <i className="fas fa-map-marker-alt"></i> Cotonou, Gbegamey
                  </p>
                  <p className="accommodation-description">
                    Chambres individuelles avec espaces communs partagés. Idéal pour les étudiants cherchant une vie sociale active.
                  </p>
                  <div className="accommodation-features">
                    <span className="feature-item"><i className="fas fa-wifi"></i> WiFi</span>
                    <span className="feature-item"><i className="fas fa-utensils"></i> Restauration</span>
                    <span className="feature-item"><i className="fas fa-dumbbell"></i> Salle de sport</span>
                    <span className="feature-item"><i className="fas fa-book"></i> Bibliothèque</span>
                  </div>
                  <div className="accommodation-footer">
                    <span className="accommodation-price">75,000 FCFA/mois</span>
                    <a href="#" className="btn btn-sm btn-outline-primary">Détails</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Résidence 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="accommodation-card animate-on-scroll">
                <div className="position-relative">
                  <img
                    src="https://img.freepik.com/free-photo/student-dormitory-room_23-2148983695.jpg"
                    className="accommodation-img"
                    alt="Appartements Étudiants"
                    loading="lazy"
                  />
                  <div className="accommodation-badge badge-complet">Complet</div>
                </div>
                <div className="accommodation-body">
                  <h3 className="accommodation-title">Appartements Étudiants</h3>
                  <p className="accommodation-location">
                    <i className="fas fa-map-marker-alt"></i> Cotonou, Gbegamey
                  </p>
                  <p className="accommodation-description">
                    Appartements entièrement équipés pour 2 à 4 étudiants. Plus d'intimité avec des espaces partagés réduits.
                  </p>
                  <div className="accommodation-features">
                    <span className="feature-item"><i className="fas fa-wifi"></i> WiFi</span>
                    <span className="feature-item"><i className="fas fa-utensils"></i> Cuisine</span>
                    <span className="feature-item"><i className="fas fa-tv"></i> TV</span>
                    <span className="feature-item"><i className="fas fa-parking"></i> Parking</span>
                  </div>
                  <div className="accommodation-footer">
                    <span className="accommodation-price">120,000 FCFA/mois</span>
                    <a href="#" className="btn btn-sm btn-outline-primary">Détails</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Résidence 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="accommodation-card animate-on-scroll">
                <div className="position-relative">
                  <img
                    src="https://img.freepik.com/free-photo/college-dorm-room_23-2148983694.jpg"
                    className="accommodation-img"
                    alt="Résidence Confort"
                    loading="lazy"
                  />
                  <div className="accommodation-badge">Disponible</div>
                </div>
                <div className="accommodation-body">
                  <h3 className="accommodation-title">Résidence Confort</h3>
                  <p className="accommodation-location">
                    <i className="fas fa-map-marker-alt"></i> Cotonou, Gbegamey
                  </p>
                  <p className="accommodation-description">
                    Chambres spacieuses avec salle de bain privative. Option haut de gamme pour un confort optimal.
                  </p>
                  <div className="accommodation-features">
                    <span className="feature-item"><i className="fas fa-wifi"></i> WiFi</span>
                    <span className="feature-item"><i className="fas fa-utensils"></i> Restauration</span>
                    <span className="feature-item"><i className="fas fa-swimming-pool"></i> Piscine</span>
                    <span className="feature-item"><i className="fas fa-concierge-bell"></i> Service ménage</span>
                  </div>
                  <div className="accommodation-footer">
                    <span className="accommodation-price">180,000 FCFA/mois</span>
                    <a href="#" className="btn btn-sm btn-outline-primary">Détails</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="#" className="btn btn-primary btn-lg">Voir toutes les options d'hébergement</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="main-section bg-light">
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Nous mettons tout en œuvre pour rendre votre séjour agréable et productif
          </p>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card animate-on-scroll">
                <div className="service-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="service-title">Sécurité 24/7</h3>
                <p className="service-description">
                  Nos résidences sont surveillées 24 heures sur 24 avec des gardes et un système de contrôle d'accès.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card animate-on-scroll">
                <div className="service-icon">
                  <i className="fas fa-bus"></i>
                </div>
                <h3 className="service-title">Navette Universitaire</h3>
                <p className="service-description">
                  Service de navette gratuit entre les résidences et le campus principal aux heures de cours.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="service-card animate-on-scroll">
                <div className="service-icon">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h3 className="service-title">Accompagnement</h3>
                <p className="service-description">
                  Équipe dédiée pour vous aider dans votre installation et tout au long de votre séjour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Localisation</h2>
          <p className="section-subtitle">
            Nos résidences sont stratégiquement situées à proximité du campus principal
          </p>
          <div className="map-container animate-on-scroll">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.601889116507!2d2.4044!3d6.3701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9e7b7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sGbégamey%2C%20Cotonou%2C%20Bénin!5e0!3m2!1sfr!2sbj!4v1690000000000!5m2!1sfr!2sbj"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation des résidences"
            ></iframe>
          </div>
          <div className="row g-3 mt-4">
            <div className="col-12 col-md-4">
              <div className="location-feature animate-on-scroll">
                <i className="fas fa-university"></i>
                <div>
                  <strong>5 min</strong>
                  <span>du campus principal</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-feature animate-on-scroll">
                <i className="fas fa-shopping-cart"></i>
                <div>
                  <strong>10 min</strong>
                  <span>du centre commercial</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="location-feature animate-on-scroll">
                <i className="fas fa-subway"></i>
                <div>
                  <strong>15 min</strong>
                  <span>des transports en commun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4 text-center text-lg-start">
              <img src="./src/assets/images/logo.png" alt="Logo UATM_GASA" className="footer-logo" />
              <p className="footer-description">
                L'Institut offre des formations d'excellence dans un environnement propice à l'apprentissage et à l'épanouissement personnel.
              </p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2 text-center text-lg-start">
              <h5 className="footer-heading">Navigation</h5>
              <ul className="footer-links">
                <li><a href="../index.html">Accueil</a></li>
                <li><a href="facultes.html">Facultés</a></li>
                <li><a href="admissions.html">Admissions</a></li>
                <li><a href="recherche.html">Recherche</a></li>
                <li><a href="hebergement.html">Hébergement</a></li>
                <li><a href="informations.html">Informations</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-5 col-lg-3 text-center text-lg-start">
              <h5 className="footer-heading">Contacts</h5>
              <ul className="footer-contacts">
                <li><i className="fas fa-map-marker-alt"></i> 2ème rue à gauche apres le CEG Gbégamey</li>
                <li><i className="fas fa-phone"></i> +229 01 65 78 77 21</li>
                <li><i className="fas fa-envelope"></i> info@uatm-gasa.com</li>
                <li><i className="fas fa-clock"></i> Lun-Ven : 8h-19h | Sam : 9h-13h</li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-3 text-center text-lg-start">
              <h5 className="footer-heading">Newsletter</h5>
              <p className="newsletter-text">Abonnez-vous pour recevoir nos dernières actualités</p>
              <div className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Votre email" />
                <button className="newsletter-btn" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              © 2023 Institut - Tous droits réservés | <a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hebergement;