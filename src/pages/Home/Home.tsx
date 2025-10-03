import React, { useEffect, useRef, useCallback, useState } from 'react';
import './Home.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface NewsItem {
  image: string;
  date: string;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
}

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const newsCardsRef = useRef<HTMLDivElement[]>([]);
  const statNumbersRef = useRef<HTMLDivElement[]>([]);
  
  const [isVisible, setIsVisible] = useState(false);

  // Utilisation de useCallback pour mémoriser la fonction
  const addToRefs = useCallback((
    el: HTMLDivElement | null,
    refArray: React.MutableRefObject<HTMLDivElement[]>
  ) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  }, []);

  // Animation des statistiques avec compteur
  const animateStats = useCallback(() => {
    statNumbersRef.current.forEach((statElement) => {
      const target = parseInt(statElement.getAttribute('data-count') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        statElement.textContent = Math.floor(current).toString() + (statElement.getAttribute('data-count')?.includes('%') ? '%' : '+');
      }, 16);
    });
  }, []);

  useEffect(() => {
    // Animation d'entrée pour le hero
    if (heroRef.current) {
      heroRef.current.classList.add('hero-visible');
    }

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Animer les statistiques quand elles deviennent visibles
            if (entry.target.classList.contains('stats-section')) {
              animateStats();
            }
          }
        });
      },
      observerOptions
    );

    // Observer pour les sections
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer les éléments
    featureCardsRef.current.forEach((card) => observer.observe(card));
    newsCardsRef.current.forEach((card) => observer.observe(card));
    
    // Observer la section stats
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      sectionObserver.observe(statsSection);
    }

    return () => {
      featureCardsRef.current.forEach((card) => observer.unobserve(card));
      newsCardsRef.current.forEach((card) => observer.unobserve(card));
      if (statsSection) {
        sectionObserver.unobserve(statsSection);
      }
    };
  }, [animateStats]);

  // Données séparées pour meilleure organisation
  const features: Feature[] = [
    {
      icon: "fas fa-graduation-cap",
      title: "Formation d'Excellence",
      description: "Programmes académiques rigoureux dispensés par des professeurs renommés dans un environnement d'apprentissage stimulant.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: "fas fa-flask",
      title: "Recherche Innovante",
      description: "Laboratoires high-tech et équipements modernes pour mener des recherches révolutionnaires et projets innovants.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: "fas fa-globe-americas",
      title: "Ouverture Internationale",
      description: "Réseau mondial avec plus de 100 universités partenaires et programmes d'échanges internationaux enrichissants.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: "fas fa-users",
      title: "Communauté Dynamique",
      description: "Vie étudiante riche avec plus de 50 clubs et associations pour un épanouissement complet.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  const news: NewsItem[] = [
    {
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "15 JUIN 2024",
      title: "Conférence Annuelle sur l'Innovation",
      description: "Notre conférence annuelle réunira les plus grands esprits de l'innovation technologique et de la recherche scientifique."
    },
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "28 MAI 2024",
      title: "Cérémonie de Remise des Diplômes",
      description: "Célébrez avec nous la réussite de nos 500 nouveaux diplômés lors d'une cérémonie exceptionnelle."
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      date: "10 MAI 2024",
      title: "Prix International de la Recherche",
      description: "Notre équipe de recherche remporte un prestigieux prix international pour ses travaux révolutionnaires."
    }
  ];

  const stats: Stat[] = [
    { number: "95", label: "Taux de Réussite" },
    { number: "500", label: "Diplômés par An" },
    { number: "50", label: "Programmes" },
    { number: "100", label: "Partenariats Internationaux" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef} aria-label="Section principale">
        <div className="hero-background">
          <div className="floating-shapes">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`shape shape-${i + 1}`}></div>
            ))}
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">L'Excellence</span>
              <span className="title-line">Académique</span>
              <span className="title-line highlight">Réinventée</span>
            </h1>
            <p className="hero-description">
              Découvrez un environnement d'apprentissage unique qui forme les leaders 
              innovateurs de demain. Rejoignez notre communauté dynamique et donnez 
              vie à vos ambitions.
            </p>
            <div className="hero-buttons">
              <a href="#features" className="btn btn-primary">
                <span>Découvrir l'Institut</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Postuler Maintenant</span>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <i className="fas fa-graduation-cap" aria-hidden="true"></i>
              <span>Diplômes Accrédités</span>
            </div>
            <div className="floating-card card-2">
              <i className="fas fa-microscope" aria-hidden="true"></i>
              <span>Recherche Avancée</span>
            </div>
            <div className="floating-card card-3">
              <i className="fas fa-globe-americas" aria-hidden="true"></i>
              <span>Réseau International</span>
            </div>
            <div className="main-visual">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Étudiants sur le campus universitaire" 
                className="hero-image"
                loading="eager"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Explorer</span>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" aria-label="Statistiques">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div 
                  className="stat-number" 
                  data-count={stat.number}
                  ref={(el) => addToRefs(el, statNumbersRef)}
                >
                  0{stat.label.includes('%') ? '%' : '+'}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section" aria-label="Caractéristiques">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Pourquoi Nous Choisir ?</h2>
            <p className="section-subtitle">
              Découvrez les atouts qui font de notre institut un lieu d'exception 
              pour votre formation et votre épanouissement.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                ref={(el) => addToRefs(el, featureCardsRef)}
                style={{ '--card-gradient': feature.gradient } as React.CSSProperties}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-bg"></div>
                  <i className={feature.icon} aria-hidden="true"></i>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="news-section" aria-label="Actualités">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Actualités & Événements</h2>
            <p className="section-subtitle">
              Restez informé des dernières nouvelles et événements marquants de notre institut.
            </p>
          </div>
          <div className="news-grid">
            {news.map((item, index) => (
              <article 
                key={index}
                className="news-card"
                ref={(el) => addToRefs(el, newsCardsRef)}
              >
                <div className="news-image-container">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="news-image" 
                    loading="lazy"
                  />
                  <div className="news-date">{item.date}</div>
                  <div className="news-overlay"></div>
                </div>
                <div className="news-content">
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.description}</p>
                  <a href="#" className="news-link">
                    <span>Lire la suite</span>
                    <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a href="#" className="btn btn-outline">
              <span>Voir toutes les actualités</span>
              <i className="fas fa-newspaper" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-label="Appel à l'action">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à Commencer Votre Aventure ?</h2>
            <p className="cta-description">
              Rejoignez notre communauté d'apprenants passionnés et donnez une nouvelle 
              dimension à votre parcours académique.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-light">
                <span>Postuler Maintenant</span>
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
              </a>
              <a href="#" className="btn btn-transparent">
                <span>Visite Virtuelle</span>
                <i className="fas fa-vr-cardboard" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer" aria-label="Pied de page">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <div className="footer-logo">
                  <i className="fas fa-graduation-cap" aria-hidden="true"></i>
                  <span>UATM_GASA</span>
                </div>
                <p className="footer-description">
                  L'Institut offre des formations d'excellence dans un environnement 
                  propice à l'apprentissage et à l'épanouissement des talents de demain.
                </p>
                <div className="social-links">
                  {['facebook-f', 'twitter', 'instagram', 'linkedin-in', 'youtube'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      aria-label={`Suivez-nous sur ${platform}`}
                      className="social-link"
                    >
                      <i className={`fab fa-${platform}`} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-links-grid">
                <div className="footer-column">
                  <h3 className="footer-title">Navigation</h3>
                  <ul className="footer-list">
                    {['Accueil', 'Facultés', 'Admissions', 'Recherche', 'Hébergement', 'Contact'].map((item) => (
                      <li key={item}>
                        <a href="#" className="footer-link">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-title">Contacts</h3>
                  <ul className="footer-list">
                    <li className="footer-contact">
                      <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                      <span>2ème rue à gauche après le CEG Gbégamey</span>
                    </li>
                    <li className="footer-contact">
                      <i className="fas fa-phone" aria-hidden="true"></i>
                      <span>+229 01 65 78 77 21</span>
                    </li>
                    <li className="footer-contact">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                      <span>info@uatm-gasa.com</span>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-title">Newsletter</h3>
                  <p className="footer-newsletter-text">
                    Abonnez-vous pour recevoir nos actualités et événements
                  </p>
                  <form className="newsletter-form">
                    <input 
                      type="email" 
                      className="newsletter-input" 
                      placeholder="Votre email"
                      required
                      aria-label="Votre adresse email"
                    />
                    <button type="submit" className="newsletter-button" aria-label="S'abonner">
                      <i className="fas fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                <p>&copy; 2024 Institut UATM_GASA. Tous droits réservés.</p>
              </div>
              <div className="footer-legal">
                {['Mentions légales', 'Confidentialité', 'Cookies'].map((item) => (
                  <a key={item} href="#" className="legal-link">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;