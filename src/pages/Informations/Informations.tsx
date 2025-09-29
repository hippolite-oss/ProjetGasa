import React from "react";
import "./Informations.css";

const Informations: React.FC = () => (
  <>
    {/* Hero Section */}
    <section className="hero-info">
      <div className="container">
        <div className="hero-info-content">
          <h1 className="hero-info-title">Informations Pratiques</h1>
          <p className="hero-info-subtitle">Toutes les ressources pour votre vie étudiante</p>
          <a href="#contact" className="btn btn-hero">Nous contacter</a>
        </div>
      </div>
    </section>

    {/* Cartes Informations */}
    <section className="info-section">
      <div className="container">
        <h2 className="section-title">Informations Clés</h2>
        <div className="row g-4">
          {/* Carte 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="info-card">
              <div className="card-content">
                <i className="fas fa-clock info-icon"></i>
                <h3 className="info-card-title">Horaires</h3>
                <div className="schedule-day">
                  <h5 className="schedule-title">Lundi - Vendredi</h5>
                  <p className="schedule-time">8h00 - 19h00</p>
                </div>
                <div className="schedule-day">
                  <h5 className="schedule-title">Samedi</h5>
                  <p className="schedule-time">9h00 - 13h00</p>
                </div>
                <p className="schedule-note">Fermé les dimanches et jours fériés</p>
              </div>
            </div>
          </div>
          
          {/* Carte 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="info-card">
              <div className="card-content">
                <i className="fas fa-map-marked-alt info-icon"></i>
                <h3 className="info-card-title">Localisation</h3>
                <p className="location-text">2ème rue à gauche après le CEG Gbégamey<br />Cotonou, Bénin</p>
                <a href="#map" className="btn btn-outline">Voir sur la carte</a>
              </div>
            </div>
          </div>
          
          {/* Carte 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="info-card">
              <div className="card-content">
                <i className="fas fa-bus info-icon"></i>
                <h3 className="info-card-title">Accès</h3>
                <ul className="access-list">
                  <li className="access-item">
                    <i className="fas fa-subway access-icon"></i>
                    <span>Transport en commun facilement accessible</span>
                  </li>
                  <li className="access-item">
                    <i className="fas fa-bus access-icon"></i>
                    <span>Plusieurs lignes de bus à proximité</span>
                  </li>
                  <li className="access-item">
                    <i className="fas fa-motorcycle access-icon"></i>
                    <span>Station Zemidjan devant le campus</span>
                  </li>
                  <li className="access-item">
                    <i className="fas fa-car access-icon"></i>
                    <span>Parking visiteurs disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Carte & Contact */}
    <section id="contact" className="map-contact-section">
      <div className="container">
        <div className="map-contact-grid">
          <div className="map-section">
            <h2 className="section-title">Nous Trouver</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.601889116507!2d2.4044!3d6.3701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9e7b7e7e7e7%3A0x7e7e7e7e7e7e7e7e!2sGbégamey%2C%20Cotonou%2C%20Bénin!5e0!3m2!1sfr!2sbj!4v1690000000000!5m2!1sfr!2sbj"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de l'institut"
              ></iframe>
            </div>
            <p className="accessibility-note">
              <i className="fas fa-info-circle"></i> Le campus est accessible aux personnes à mobilité réduite
            </p>
          </div>
          
          <div className="contact-section">
            <h2 className="section-title">Contactez-nous</h2>
            <div className="contact-list">
              <div className="contact-item">
                <i className="fas fa-phone contact-icon"></i>
                <div className="contact-info">
                  <h5 className="contact-title">Téléphone</h5>
                  <p className="contact-detail">+229 01 65 78 77 21</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-envelope contact-icon"></i>
                <div className="contact-info">
                  <h5 className="contact-title">Email</h5>
                  <p className="contact-detail">info@uatm-gasa.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-address-book contact-icon"></i>
                <div className="contact-info">
                  <h5 className="contact-title">Service des Admissions</h5>
                  <p className="contact-detail">admissions@uatm-gasa.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-calendar-alt contact-icon"></i>
                <div className="contact-info">
                  <h5 className="contact-title">Rendez-vous</h5>
                  <p className="contact-detail">Sur rendez-vous du lundi au vendredi</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-headset contact-icon"></i>
                <div className="contact-info">
                  <h5 className="contact-title">Assistance</h5>
                  <p className="contact-detail">24/7 pour les urgences étudiantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Services aux Étudiants</h2>
        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-book service-box-icon"></i>
              <h5 className="service-box-title">Bibliothèque</h5>
              <p className="service-box-text">100 000 ouvrages et ressources numériques accessibles 7j/7</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-utensils service-box-icon"></i>
              <h5 className="service-box-title">Restauration</h5>
              <p className="service-box-text">Cafétéria et food trucks sur le campus avec menus variés</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-heartbeat service-box-icon"></i>
              <h5 className="service-box-title">Santé</h5>
              <p className="service-box-text">Infirmerie et psychologue universitaire à votre disposition</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-briefcase service-box-icon"></i>
              <h5 className="service-box-title">Carrières</h5>
              <p className="service-box-text">Service d'orientation professionnelle et aide à l'emploi</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-wifi service-box-icon"></i>
              <h5 className="service-box-title">Connectivité</h5>
              <p className="service-box-text">WiFi haut débit sur tout le campus et salles informatiques</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-dumbbell service-box-icon"></i>
              <h5 className="service-box-title">Sports</h5>
              <p className="service-box-text">Complexe sportif avec salle de musculation et terrains</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-theater-masks service-box-icon"></i>
              <h5 className="service-box-title">Culture</h5>
              <p className="service-box-text">Clubs étudiants, théâtre et activités culturelles variées</p>
            </div>
          </div>
          
          <div className="col-6 col-md-3">
            <div className="service-box">
              <i className="fas fa-hand-holding-heart service-box-icon"></i>
              <h5 className="service-box-title">Solidarité</h5>
              <p className="service-box-text">Aide sociale et dispositifs pour étudiants en difficulté</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Questions Fréquentes</h2>
        <div className="faq-container">
          <div className="faq-item">
            <button className="faq-question">
              Où puis-je me garer sur le campus ?
              <i className="fas fa-chevron-down faq-icon"></i>
            </button>
            <div className="faq-answer">
              <p>Un parking payant est disponible à l'entrée nord du campus (5€/jour). Nous recommandons fortement les transports en commun pour des raisons écologiques et pratiques.</p>
              <p><strong>Alternatives :</strong> Plusieurs parkings partenaires à proximité offrent des tarifs préférentiels aux étudiants sur présentation de la carte.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <button className="faq-question">
              L'institut est-il accessible aux PMR ?
              <i className="fas fa-chevron-down faq-icon"></i>
            </button>
            <div className="faq-answer">
              <p>Oui, tous nos bâtiments sont équipés pour l'accueil des personnes à mobilité réduite :</p>
              <ul>
                <li>Ascenseurs dans tous les bâtiments de plus d'un étage</li>
                <li>Rampe d'accès à toutes les entrées principales</li>
                <li>Sanitaires adaptés à chaque niveau</li>
                <li>Stationnements réservés près des entrées</li>
                <li>Signalétique en braille dans les zones communes</li>
              </ul>
              <p>N'hésitez pas à contacter notre service d'accueil pour des besoins spécifiques.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <button className="faq-question">
              Quels sont les horaires de la bibliothèque ?
              <i className="fas fa-chevron-down faq-icon"></i>
            </button>
            <div className="faq-answer">
              <p>La bibliothèque centrale est ouverte :</p>
              <ul>
                <li><strong>Semestre :</strong> Lundi-Vendredi 8h-22h | Samedi 9h-20h | Dimanche 10h-18h</li>
                <li><strong>Vacances :</strong> Lundi-Vendredi 9h-19h | Samedi 10h-17h</li>
                <li><strong>Examens :</strong> Ouverture 24h/24 avec badge étudiant</li>
              </ul>
              <p>Les bibliothèques spécialisées (par département) ont des horaires différents.</p>
            </div>
          </div>
          
          <div className="faq-item">
            <button className="faq-question">
              Comment obtenir une carte étudiante ?
              <i className="fas fa-chevron-down faq-icon"></i>
            </button>
            <div className="faq-answer">
              <p>La carte étudiante est délivrée automatiquement après :</p>
              <ol>
                <li>Validation de votre inscription administrative</li>
                <li>Paiement des frais de scolarité</li>
                <li>Envoi de votre photo d'identité numérique</li>
              </ol>
              <p>Vous recevrez un email pour récupérer votre carte au bureau des affaires étudiantes.</p>
              <p><strong>En cas de perte :</strong> Une nouvelle carte peut être émise pour 15€ au même bureau.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="info-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
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
          
          <div className="footer-col">
            <h5 className="footer-title">Navigation</h5>
            <ul className="footer-links">
              <li><a href="../index.html">Accueil</a></li>
              <li><a href="facultes.html">Facultés</a></li>
              <li><a href="admissions.html">Admissions</a></li>
              <li><a href="recherche.html">Recherche</a></li>
              <li><a href="hebergement.html">Hébergement</a></li>
              <li><a href="informations.html">Informations</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5 className="footer-title">Contacts</h5>
            <ul className="footer-contacts">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>2ème rue à gauche après le CEG Gbégamey</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+229 01 65 78 77 21</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@uatm-gasa.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Lun-Ven : 8h-19h | Sam : 9h-13h</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h5 className="footer-title">Newsletter</h5>
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

export default Informations;