
import "./Faculte.css";

const Faculte: React.FC = () => (
  <>
    {/* Hero Section */}
    <section className="hero-faculties">
      <div className="container">
        <h1 className="display-3 fw-bold mb-4">Nos Facultés</h1>
        <p className="lead">Découvrez nos pôles d'excellence académique</p>
      </div>
    </section>

    {/* Facultés */}
    <section className="main-section">
      <div className="container">
        <div className="row g-4">
          {/* Faculté 1 */}
          <div className="col-md-4 faculty-card">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="mb-0">Sciences & Technologies</h5>
              </div>
              <img
                src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="Laboratoire de sciences modernes"
              />
              <div className="card-body">
                <span className="badge badge-faculty mb-3">
                  Licence • Master • Doctorat
                </span>
                <p className="card-text">
                  Formation en IA, robotique et biotechnologies avec des laboratoires de pointe.
                </p>
                <ul className="list-unstyled">
                  <li>12 laboratoires équipés</li>
                  <li>90% d'insertion professionnelle</li>
                  <li>Partenariats avec Google, Tesla, SpaceX</li>
                </ul>
                <img src="logo.png" alt="Logo Sciences" className="mt-3" width={80} />
              </div>
            </div>
          </div>
          {/* Faculté 2 */}
          <div className="col-md-4 faculty-card">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="mb-0">Lettres & Sciences Humaines</h5>
              </div>
              <img
                src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="Bibliothèque universitaire"
              />
              <div className="card-body">
                <span className="badge badge-faculty mb-3">
                  Licence • Master
                </span>
                <p className="card-text">
                  Programmes en histoire, philosophie et langues avec des partenariats internationaux.
                </p>
                <ul className="list-unstyled">
                  <li>8 départements spécialisés</li>
                  <li>Échanges avec 20 universités</li>
                  <li>Bibliothèque de 50 000 ouvrages</li>
                </ul>
                <img src="logo.png" alt="Logo Lettres" className="mt-3" width={80} />
              </div>
            </div>
          </div>
          {/* Faculté 3 */}
          <div className="col-md-4 faculty-card">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="mb-0">Économie & Gestion</h5>
              </div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="Réunion d'affaires moderne"
              />
              <div className="card-body">
                <span className="badge badge-faculty mb-3">
                  Bachelor • MBA
                </span>
                <p className="card-text">
                  Formation en gestion, finance et entrepreneuriat avec incubateur de startups.
                </p>
                <ul className="list-unstyled">
                  <li>Accréditation AACSB & AMBA</li>
                  <li>150 entreprises partenaires</li>
                  <li>Programmes en alternance</li>
                </ul>
                <img src="logo.png" alt="Logo Économie" className="mt-3" width={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section Vidéo */}
    <section className="video-section">
      <div className="container">
        <h2 className="text-center">Découvrez notre Institut en vidéo</h2>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="ratio ratio-16x9 shadow-lg rounded">
              <iframe
                src="https://www.youtube.com/embed/ZwHL9taZi_k"
                title="Vidéo de présentation de notre Institut"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://youtu.be/ZwHL9taZi_k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <i className="fab fa-youtube me-2"></i> Voir sur YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 text-center text-lg-start">
            <img src="logo.png" alt="Logo UATM_GASA" className="footer-logo" />
            <p className="mb-3">
              L'Institut offre des formations d'excellence dans un environnement propice à l'apprentissage et à l'épanouissement personnel.
            </p>
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
              <li><a href="../index.html">Accueil</a></li>
              <li><a href="facultes.html">Facultés</a></li>
              <li><a href="admissions.html">Admissions</a></li>
              <li><a href="recherche.html">Recherche</a></li>
              <li><a href="hebergement.html">Hébergement</a></li>
              <li><a href="informations.html">Informations</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 text-center text-lg-start footer-links">
            <h5>Contacts</h5>
            <ul className="p-0">
              <li><i className="fas fa-map-marker-alt"></i>2ème rue à gauche apres le CEG Gbégamey</li>
              <li><i className="fas fa-phone"></i>+229 01 65 78 77 21</li>
              <li><i className="fas fa-envelope"></i> info@uatm-gasa.com</li>
              <li><i className="fas fa-clock"></i> Lun-Ven : 8h-19h | Sam : 9h-13h</li>
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
          <p className="mb-0">
            © 2023 Institut - Tous droits réservés | <a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a>
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default Faculte;