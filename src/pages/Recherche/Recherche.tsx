import React from "react";
import "./Recherche.css";

const Recherche: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-research">
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Excellence en Recherche</h1>
          <p className="lead">Innovation et découvertes au cœur de notre mission académique</p>
        </div>
      </section>

      {/* Domaines de recherche */}
      <section className="research-section">
        <div className="container">
          <h2 className="section-title">Nos Axes de Recherche</h2>
          <div className="row g-4">
            {/* Domaine 1 */}
            <div className="col-md-4 research-card">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="mb-0">Sciences & Technologies</h5>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg"
                  className="card-img-top"
                  alt="Sciences"
                />
                <div className="card-body">
                  <span className="badge research-badge mb-3">15 Laboratoires</span>
                  <p className="card-text">
                    Recherche de pointe en intelligence artificielle, nanotechnologies et énergies renouvelables.
                  </p>
                  <ul className="list-unstyled">
                    <li>3 ERC Grants</li>
                    <li>50 brevets déposés</li>
                    <li>Partenariats industriels</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Domaine 2 */}
            <div className="col-md-4 research-card">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="mb-0">Santé & Biotechnologies</h5>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/scientist-working-laboratory_23-2148980276.jpg"
                  className="card-img-top"
                  alt="Santé"
                />
                <div className="card-body">
                  <span className="badge research-badge mb-3">8 Centres d'excellence</span>
                  <p className="card-text">
                    Recherche translationnelle en oncologie, neurosciences et médecine régénérative.
                  </p>
                  <ul className="list-unstyled">
                    <li>12 essais cliniques</li>
                    <li>Partenariats hospitaliers</li>
                    <li>Plateformes technologiques</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Domaine 3 */}
            <div className="col-md-4 research-card">
              <div className="card h-100">
                <div className="card-header">
                  <h5 className="mb-0">Sciences Humaines & Sociales</h5>
                </div>
                <img
                  src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                  className="card-img-top"
                  alt="SHS"
                />
                <div className="card-body">
                  <span className="badge research-badge mb-3">6 Chaires UNESCO</span>
                  <p className="card-text">
                    Études interdisciplinaires sur les sociétés contemporaines et les patrimoines culturels.
                  </p>
                  <ul className="list-unstyled">
                    <li>8 programmes internationaux</li>
                    <li>Observatoires terrain</li>
                    <li>Études longitudinales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">Notre Recherche en Chiffres</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number" data-count="120">120</div>
                <p>Projets actifs</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number" data-count="45">45</div>
                <p>M€ de financement</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number" data-count="320">320</div>
                <p>Publications/an</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-item">
                <div className="stat-number" data-count="18">18</div>
                <p>Prix internationaux</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Nos Chercheurs Éminents</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="team-member">
                <div className="team-img-container">
                  <img src="/logo.png" className="team-img" alt="Chercheur 1" />
                  <div className="team-social">
                    <a href="#"><i className="fab fa-google-scholar"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <h4>Pr. Sophie Martin</h4>
                <p className="text-muted">Chimie des matériaux</p>
                <p>Médaille d'or CNRS 2022</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="team-img-container">
                  <img src="/logo.png" className="team-img" alt="Chercheur 2" />
                  <div className="team-social">
                    <a href="#"><i className="fab fa-google-scholar"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <h4>Dr. Jean Lefèvre</h4>
                <p className="text-muted">Économie comportementale</p>
                <p>ERC Advanced Grant</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-member">
                <div className="team-img-container">
                  <img src="/logo.png" className="team-img" alt="Chercheur 3" />
                  <div className="team-social">
                    <a href="#"><i className="fab fa-google-scholar"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
                <h4>Pr. Amina Diallo</h4>
                <p className="text-muted">Immunothérapie</p>
                <p>Prix Breakthrough 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications récentes */}
      <section className="pubs-section">
        <div className="container">
          <h2 className="section-title">Publications Récentes</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="pub-item">
                <h5 className="pub-title">Nouveaux matériaux supraconducteurs à haute température</h5>
                <p className="pub-meta">Nature Materials, Mars 2023 - Pr. Sophie Martin et al.</p>
                <p>
                  Découverte de nouveaux matériaux supraconducteurs fonctionnant à des températures record, ouvrant la voie à des applications énergétiques révolutionnaires.
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">Lire l'article</a>
              </div>
              <div className="pub-item">
                <h5 className="pub-title">Impact des politiques climatiques sur les inégalités</h5>
                <p className="pub-meta">Science, Février 2023 - Dr. Jean Lefèvre et al.</p>
                <p>
                  Analyse transnationale des effets redistributifs des politiques climatiques dans 45 pays, avec recommandations pour des transitions justes.
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">Lire l'article</a>
              </div>
              <div className="pub-item">
                <h5 className="pub-title">Découverte d'une nouvelle cible thérapeutique en oncologie</h5>
                <p className="pub-meta">Cell, Janvier 2023 - Pr. Amina Diallo et al.</p>
                <p>
                  Identification d'un nouveau mécanisme moléculaire impliqué dans la résistance aux traitements, ouvrant des perspectives pour de nouvelles thérapies.
                </p>
                <a href="#" className="btn btn-sm btn-outline-primary">Lire l'article</a>
              </div>
              <div className="text-center mt-4">
                <a href="#" className="btn btn-primary">Voir toutes les publications</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Recherche;