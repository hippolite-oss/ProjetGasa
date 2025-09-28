import React from "react";
import "./Accueil.css";

const Accueil: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">L'Excellence Académique</h1>
            <p className="hero-subtitle">
              Découvrez un environnement d'apprentissage unique qui forme les leaders de demain
            </p>
            <a href="#features" className="btn btn-hero">
              Découvrir l'Institut
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="main-section">
        <div className="container">
          <h2 className="text-center section-title">Pourquoi choisir notre Institut ?</h2>
          <div className="features-row">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="feature-title">Formation d'Excellence</h3>
              <p>
                Des programmes académiques rigoureux dispensés par des professeurs renommés dans leur domaine.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="feature-title">Recherche Innovante</h3>
              <p>
                Des laboratoires équipés des dernières technologies pour mener des recherches de pointe.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="feature-title">Ouverture Internationale</h3>
              <p>
                Partenariats avec plus de 100 universités à travers le monde pour des échanges enrichissants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="text-center section-title">Actualités & Événements</h2>
          <div className="news-row">
            <div className="news-card">
              <div className="news-image-wrapper">
                <img
                  src="https://img.freepik.com/free-photo/business-people-conference-meeting_53876-94868.jpg"
                  alt="Conférence"
                  className="news-img"
                />
                <div className="news-date">15 JUIN 2023</div>
              </div>
              <div className="news-content">
                <h3 className="news-title">Conférence Annuelle</h3>
                <p>
                  Notre conférence annuelle sur les innovations technologiques aura lieu le mois prochain.
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  En savoir plus
                </a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image-wrapper">
                <img
                  src="https://img.freepik.com/free-photo/business-people-conference-meeting_53876-94868.jpg"
                  alt="Diplomés"
                  className="news-img"
                />
                <div className="news-date">28 MAI 2023</div>
              </div>
              <div className="news-content">
                <h3 className="news-title">Cérémonie de Remise des Diplômes</h3>
                <p>
                  Félicitations à nos 500 nouveaux diplômés qui rejoignent le monde professionnel cette année.
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  En savoir plus
                </a>
              </div>
            </div>
            <div className="news-card">
              <div className="news-image-wrapper">
                <img
                  src="https://img.freepik.com/free-photo/business-people-conference-meeting_53876-94868.jpg"
                  alt="Recherche"
                  className="news-img"
                />
                <div className="news-date">10 MAI 2023</div>
              </div>
              <div className="news-content">
                <h3 className="news-title">Prix de la Recherche</h3>
                <p>
                  Notre équipe de recherche a remporté le prestigieux prix international pour ses travaux novateurs.
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="btn btn-primary">
              Voir toutes les actualités
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Accueil;