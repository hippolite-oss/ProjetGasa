import React, { useEffect } from "react";
import "./Admissions.css";

// Hook pour les animations au défilement
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

    // Animation pour les compteurs
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number');
      
      counters.forEach(counter => {
        const elementTop = counter.getBoundingClientRect().top;
        const isVisible = elementTop < window.innerHeight - 100;
        
        if (isVisible && !counter.classList.contains('animated')) {
          const target = parseInt(counter.getAttribute('data-count') || '0');
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          
          const updateCounter = () => {
            current += step;
            if (current < target) {
              counter.textContent = Math.ceil(current).toString();
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target.toString();
              counter.classList.add('animated');
            }
          };
          
          updateCounter();
        }
      });
    };

    const handleScroll = () => {
      animateOnScroll();
      animateCounters();
    };

    // Animation initiale
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

const Admissions: React.FC = () => {
  useScrollAnimation();

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-admissions">
        <div className="container">
          <div className="hero-content animate-on-scroll">
            <h1 className="hero-title">Admissions & Inscriptions</h1>
            <p className="hero-subtitle">Rejoignez notre communauté académique d'excellence</p>
            <div className="hero-cta">
              <a href="#process" className="btn btn-primary">Découvrir le processus</a>
              <a href="#apply" className="btn btn-outline">Postuler maintenant</a>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="stats-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3 col-6">
              <div className="stat-item animate-on-scroll">
                <div className="stat-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="stat-number" data-count="85">0</div>
                <p className="stat-label">% de réussite</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item animate-on-scroll">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-number" data-count="2000">0</div>
                <p className="stat-label">Étudiants</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item animate-on-scroll">
                <div className="stat-icon">
                  <i className="fas fa-globe-africa"></i>
                </div>
                <div className="stat-number" data-count="25">0</div>
                <p className="stat-label">Nationalités</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="stat-item animate-on-scroll">
                <div className="stat-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="stat-number" data-count="150">0</div>
                <p className="stat-label">Partenariats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'admission */}
      <section id="process" className="process-section">
        <div className="container">
          <h2 className="section-title">Processus d'Admission</h2>
          <p className="section-subtitle">Un parcours simplifié pour intégrer notre institution</p>
          
          <div className="process-timeline">
            <div className="process-item animate-on-scroll">
              <div className="process-number">01</div>
              <div className="process-content">
                <div className="process-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3 className="process-title">Dépôt de candidature</h3>
                <p className="process-description">
                  Soumettez votre dossier de candidature en ligne avec tous les documents requis.
                </p>
                <ul className="process-features">
                  <li>Formulaire de candidature</li>
                  <li>Relevés de notes</li>
                  <li>Lettres de recommandation</li>
                </ul>
              </div>
            </div>

            <div className="process-item animate-on-scroll">
              <div className="process-number">02</div>
              <div className="process-content">
                <div className="process-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3 className="process-title">Examen du dossier</h3>
                <p className="process-description">
                  Notre commission pédagogique étudie attentivement chaque candidature.
                </p>
                <ul className="process-features">
                  <li>Évaluation académique</li>
                  <li>Analyse du parcours</li>
                  <li>Vérification des prérequis</li>
                </ul>
              </div>
            </div>

            <div className="process-item animate-on-scroll">
              <div className="process-number">03</div>
              <div className="process-content">
                <div className="process-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="process-title">Entretien personnel</h3>
                <p className="process-description">
                  Rencontre avec notre équipe pédagogique pour échanger sur votre projet.
                </p>
                <ul className="process-features">
                  <li>Entretien motivationnel</li>
                  <li>Évaluation des compétences</li>
                  <li>Présentation du projet</li>
                </ul>
              </div>
            </div>

            <div className="process-item animate-on-scroll">
              <div className="process-number">04</div>
              <div className="process-content">
                <div className="process-icon">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <h3 className="process-title">Notification</h3>
                <p className="process-description">
                  Réception de la décision d'admission et des formalités d'inscription.
                </p>
                <ul className="process-features">
                  <li>Décision sous 15 jours</li>
                  <li>Dossier d'inscription</li>
                  <li>Planning d'intégration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes disponibles */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Nos Programmes</h2>
          <p className="section-subtitle">Des formations d'excellence adaptées à vos ambitions</p>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="program-card animate-on-scroll">
                <div className="program-header">
                  <div className="program-icon">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h3 className="program-title">Ingénierie & Technologie</h3>
                  <div className="program-badge">Licence & Master</div>
                </div>
                <div className="program-body">
                  <p className="program-description">
                    Formations en informatique, génie civil, électrique et mécanique avec des approches innovantes.
                  </p>
                  <ul className="program-features">
                    <li><i className="fas fa-check"></i> Informatique & Réseaux</li>
                    <li><i className="fas fa-check"></i> Génie Civil</li>
                    <li><i className="fas fa-check"></i> Génie Électrique</li>
                    <li><i className="fas fa-check"></i> Génie Mécanique</li>
                  </ul>
                  <div className="program-info">
                    <span className="info-item">
                      <i className="fas fa-clock"></i> 3-5 ans
                    </span>
                    <span className="info-item">
                      <i className="fas fa-language"></i> Français/Anglais
                    </span>
                  </div>
                </div>
                <div className="program-footer">
                  <a href="#" className="btn-program">Découvrir <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="program-card animate-on-scroll">
                <div className="program-header">
                  <div className="program-icon">
                    <i className="fas fa-heartbeat"></i>
                  </div>
                  <h3 className="program-title">Sciences de la Santé</h3>
                  <div className="program-badge">Licence & Master</div>
                </div>
                <div className="program-body">
                  <p className="program-description">
                    Formations en médecine, pharmacie et sciences biomédicales avec des stages pratiques.
                  </p>
                  <ul className="program-features">
                    <li><i className="fas fa-check"></i> Médecine Générale</li>
                    <li><i className="fas fa-check"></i> Pharmacie</li>
                    <li><i className="fas fa-check"></i> Sciences Biomédicales</li>
                    <li><i className="fas fa-check"></i> Santé Publique</li>
                  </ul>
                  <div className="program-info">
                    <span className="info-item">
                      <i className="fas fa-clock"></i> 4-7 ans
                    </span>
                    <span className="info-item">
                      <i className="fas fa-language"></i> Français
                    </span>
                  </div>
                </div>
                <div className="program-footer">
                  <a href="#" className="btn-program">Découvrir <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="program-card animate-on-scroll">
                <div className="program-header">
                  <div className="program-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="program-title">Sciences Économiques</h3>
                  <div className="program-badge">Licence & Master</div>
                </div>
                <div className="program-body">
                  <p className="program-description">
                    Programmes en économie, gestion et commerce international avec une vision globale.
                  </p>
                  <ul className="program-features">
                    <li><i className="fas fa-check"></i> Économie & Finance</li>
                    <li><i className="fas fa-check"></i> Gestion d'Entreprise</li>
                    <li><i className="fas fa-check"></i> Marketing</li>
                    <li><i className="fas fa-check"></i> Commerce International</li>
                  </ul>
                  <div className="program-info">
                    <span className="info-item">
                      <i className="fas fa-clock"></i> 3-5 ans
                    </span>
                    <span className="info-item">
                      <i className="fas fa-language"></i> Français/Anglais
                    </span>
                  </div>
                </div>
                <div className="program-footer">
                  <a href="#" className="btn-program">Découvrir <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates importantes */}
      <section className="deadlines-section">
        <div className="container">
          <h2 className="section-title">Calendrier des Admissions</h2>
          <p className="section-subtitle">Ne manquez pas les dates limites pour votre candidature</p>
          
          <div className="deadlines-timeline">
            <div className="deadline-item animate-on-scroll">
              <div className="deadline-date">
                <span className="date-day">15</span>
                <span className="date-month">Janv</span>
              </div>
              <div className="deadline-content">
                <h3 className="deadline-title">Ouverture des candidatures</h3>
                <p className="deadline-description">
                  Début de la période de dépôt des dossiers de candidature pour l'année académique.
                </p>
                <div className="deadline-status status-upcoming">À venir</div>
              </div>
            </div>

            <div className="deadline-item animate-on-scroll">
              <div className="deadline-date">
                <span className="date-day">31</span>
                <span className="date-month">Mars</span>
              </div>
              <div className="deadline-content">
                <h3 className="deadline-title">Première session</h3>
                <p className="deadline-description">
                  Date limite pour la première session de candidature avec avantage de bourse.
                </p>
                <div className="deadline-status status-active">En cours</div>
              </div>
            </div>

            <div className="deadline-item animate-on-scroll">
              <div className="deadline-date">
                <span className="date-day">15</span>
                <span className="date-month">Juin</span>
              </div>
              <div className="deadline-content">
                <h3 className="deadline-title">Deuxième session</h3>
                <p className="deadline-description">
                  Dernière chance pour déposer votre candidature pour l'année académique.
                </p>
                <div className="deadline-status status-upcoming">À venir</div>
              </div>
            </div>

            <div className="deadline-item animate-on-scroll">
              <div className="deadline-date">
                <span className="date-day">01</span>
                <span className="date-month">Sept</span>
              </div>
              <div className="deadline-content">
                <h3 className="deadline-title">Rentrée académique</h3>
                <p className="deadline-description">
                  Début des cours pour tous les nouveaux étudiants admis.
                </p>
                <div className="deadline-status status-upcoming">À venir</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section d'application */}
      <section id="apply" className="apply-section">
        <div className="container">
          <div className="apply-content">
            <div className="apply-text animate-on-scroll">
              <h2 className="section-title">Prêt à nous rejoindre ?</h2>
              <p className="section-subtitle">
                Postulez dès maintenant et démarrez votre parcours vers l'excellence académique.
              </p>
              <div className="apply-features">
                <div className="feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <div>
                    <h4>Processus sécurisé</h4>
                    <p>Vos données sont protégées et confidentielles</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Réponse rapide</h4>
                    <p>Décision sous 15 jours ouvrables</p>
                  </div>
                </div>
                <div className="feature-item">
                  <i className="fas fa-headset"></i>
                  <div>
                    <h4>Support dédié</h4>
                    <p>Notre équipe vous accompagne à chaque étape</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="apply-form-container animate-on-scroll">
              <div className="apply-form">
                <h3 className="form-title">Démarrez votre candidature</h3>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Nom complet" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Adresse email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Téléphone" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <select className="form-input" required>
                      <option value="">Choisir un programme</option>
                      <option value="ingenierie">Ingénierie & Technologie</option>
                      <option value="sante">Sciences de la Santé</option>
                      <option value="economie">Sciences Économiques</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-input" required>
                      <option value="">Niveau d'étude</option>
                      <option value="licence">Licence</option>
                      <option value="master">Master</option>
                      <option value="doctorat">Doctorat</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    <i className="fas fa-paper-plane"></i> Commencer ma candidature
                  </button>
                </form>
                <p className="form-note">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Questions Fréquentes</h2>
          <p className="section-subtitle">Trouvez rapidement des réponses à vos questions</p>
          
          <div className="faq-grid">
            <div className="faq-item animate-on-scroll">
              <div className="faq-question">
                <h4>Quels sont les documents requis pour la candidature ?</h4>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Les documents requis incluent : diplômes, relevés de notes, CV, lettres de motivation, pièce d'identité, et photos d'identité. La liste complète est disponible dans notre guide de candidature.</p>
              </div>
            </div>

            <div className="faq-item animate-on-scroll">
              <div className="faq-question">
                <h4>Y a-t-il des bourses d'études disponibles ?</h4>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Oui, nous proposons plusieurs types de bourses : bourses d'excellence, bourses sociales, et bourses de partenariat. Les détails sont disponibles sur notre portail des bourses.</p>
              </div>
            </div>

            <div className="faq-item animate-on-scroll">
              <div className="faq-question">
                <h4>Quel est le coût des frais de scolarité ?</h4>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Les frais de scolarité varient selon le programme et le niveau d'étude. Contactez notre service des admissions pour un devis personnalisé et les options de paiement.</p>
              </div>
            </div>

            <div className="faq-item animate-on-scroll">
              <div className="faq-question">
                <h4>Puis-je postuler en cours d'année ?</h4>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Les admissions principales ont lieu avant la rentrée de septembre. Cependant, certaines formations acceptent des admissions en cours d'année. Consultez notre calendrier académique.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;