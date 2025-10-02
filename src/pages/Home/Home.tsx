import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const featureCardsRef = useRef<HTMLDivElement[]>([]);
  const newsCardsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null, refArray: React.MutableRefObject<HTMLDivElement[]>) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    featureCardsRef.current.forEach((card) => observer.observe(card));
    newsCardsRef.current.forEach((card) => observer.observe(card));

    return () => {
      featureCardsRef.current.forEach((card) => observer.unobserve(card));
      newsCardsRef.current.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const carouselImages = [
    {
      src: "https://img.freepik.com/free-photo/group-diverse-students-studying-together_53876-14836.jpg",
      title: "L'Excellence Académique",
      subtitle: "Découvrez un environnement d'apprentissage unique qui forme les leaders de demain"
    },
    {
      src: "https://img.freepik.com/free-photo/students-studying-together-library_23-2149852672.jpg",
      title: "Innovation & Recherche",
      subtitle: "Des laboratoires équipés des dernières technologies pour des recherches de pointe"
    },
    {
      src: "https://img.freepik.com/free-photo/graduation-ceremony-educational-institution_52683-100297.jpg",
      title: "Communauté Dynamique",
      subtitle: "Rejoignez une communauté étudiante vibrante et multiculturelle"
    }
  ];

  const features = [
    {
      icon: "fas fa-graduation-cap",
      title: "Formation d'Excellence",
      description: "Des programmes académiques rigoureux dispensés par des professeurs renommés dans leur domaine."
    },
    {
      icon: "fas fa-flask",
      title: "Recherche Innovante",
      description: "Des laboratoires équipés des dernières technologies pour mener des recherches de pointe."
    },
    {
      icon: "fas fa-globe",
      title: "Ouverture Internationale",
      description: "Partenariats avec plus de 100 universités à travers le monde pour des échanges enrichissants."
    }
  ];

  const news = [
    {
      image: "https://img.freepik.com/free-photo/business-people-conference-meeting_53876-94868.jpg",
      date: "15 JUIN 2023",
      title: "Conférence Annuelle",
      description: "Notre conférence annuelle sur les innovations technologiques aura lieu le mois prochain."
    },
    {
      image: "https://img.freepik.com/free-photo/graduation-hat-diploma-gown-celebration_53876-133731.jpg",
      date: "28 MAI 2023",
      title: "Cérémonie de Remise des Diplômes",
      description: "Félicitations à nos 500 nouveaux diplômés qui rejoignent le monde professionnel cette année."
    },
    {
      image: "https://img.freepik.com/free-photo/scientists-working-lab_23-2148967263.jpg",
      date: "10 MAI 2023",
      title: "Prix de la Recherche",
      description: "Notre équipe de recherche a remporté le prestigieux prix international pour ses travaux novateurs."
    }
  ];

  return (
    <div className="accueil-page">
      {/* Hero Carousel */}
      <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <div className="carousel-inner">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="carousel-content">
                <h1 className="hero-title">{image.title}</h1>
                <p className="hero-subtitle">{image.subtitle}</p>
                <a href="#features" className="btn btn-hero">Découvrir l'Institut</a>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>

      {/* Features Section */}
      <section id="features" className="main-section">
        <div className="container">
          <h2 className="section-title">Pourquoi choisir notre Institut ?</h2>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-md-4">
                <div 
                  className="feature-card"
                  ref={el => addToRefs(el, featureCardsRef)}
                >
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Actualités & Événements</h2>
          <div className="row">
            {news.map((item, index) => (
              <div key={index} className="col-md-4">
                <div 
                  className="news-card"
                  ref={el => addToRefs(el, newsCardsRef)}
                >
                  <div className="position-relative">
                    <img src={item.image} className="img-fluid w-100" alt={item.title} />
                    <div className="news-date">{item.date}</div>
                  </div>
                  <div className="p-4">
                    <h3 className="news-title">{item.title}</h3>
                    <p>{item.description}</p>
                    <a href="#" className="btn btn-sm btn-outline-primary">En savoir plus</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn btn-primary">Voir toutes les actualités</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 text-center text-lg-start">
              <img src="navC/logo.png" alt="Logo UATM_GASA" className="footer-logo" />
              <p className="mb-3">L'Institut offre des formations d'excellence dans un environnement propice à l'apprentissage et à l'épanouissement personnel.</p>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 text-center text-lg-start footer-links">
              <h5>Navigation</h5>
              <ul className="p-0">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="navC/facultes.html">Facultés</a></li>
                <li><a href="navC/admissions.html">Admissions</a></li>
                <li><a href="navC/recherche.html">Recherche</a></li>
                <li><a href="navC/hebergement.html">Hébergement</a></li>
                <li><a href="navC/informations.html">Informations</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 text-center text-lg-start footer-links">
              <h5>Contacts</h5>
              <ul className="p-0">
                <li><i className="fas fa-map-marker-alt"></i> 2ème rue à gauche apres le CEG Gbégamey</li>
                <li><i className="fas fa-phone"></i> +229 01 65 78 77 21</li>
                <li><i className="fas fa-envelope"></i> info@uatm-gasa.com</li>
              </ul>
            </div>
            <div className="col-lg-3 mb-4 text-center text-lg-start">
              <h5>Newsletter</h5>
              <p>Abonnez-vous pour recevoir nos dernières actualités</p>
              <div className="input-group mb-3">
                <input type="email" className="form-control newsletter-input" placeholder="Votre email" />
                <button className="btn btn-warning newsletter-btn" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p className="mb-0">© 2025 Institut - Tous droits réservés | <a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;