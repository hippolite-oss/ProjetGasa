import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const missionRef = useRef<HTMLDivElement>(null);
  const valueCardsRef = useRef<HTMLDivElement[]>([]);
  const teamCardsRef = useRef<HTMLDivElement[]>([]);
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (
    el: HTMLDivElement | null,
    refArray: React.MutableRefObject<HTMLDivElement[]>
  ) => {
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
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    valueCardsRef.current.forEach((card) => observer.observe(card));
    teamCardsRef.current.forEach((card) => observer.observe(card));
    timelineItemsRef.current.forEach((item) => observer.observe(item));

    // Animation pour la section mission
    if (missionRef.current) {
      setTimeout(() => {
        missionRef.current?.classList.add('mission-visible');
      }, 500);
    }

    return () => {
      valueCardsRef.current.forEach((card) => observer.unobserve(card));
      teamCardsRef.current.forEach((card) => observer.unobserve(card));
      timelineItemsRef.current.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const values = [
    {
      icon: "fas fa-star",
      title: "Excellence",
      description: "Nous visons l'excellence dans tous les aspects de l'éducation et de la recherche, en encourageant nos étudiants à repousser leurs limites.",
      color: "#667eea"
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "Nous cultivons l'innovation et la pensée créative pour préparer nos étudiants aux défis du monde moderne.",
      color: "#f093fb"
    },
    {
      icon: "fas fa-handshake",
      title: "Intégrité",
      description: "L'éthique et l'intégrité guident toutes nos actions et interactions au sein de la communauté universitaire.",
      color: "#4facfe"
    },
    {
      icon: "fas fa-users",
      title: "Communauté",
      description: "Nous construisons une communauté inclusive où chaque voix est valorisée et respectée.",
      color: "#43e97b"
    },
    {
      icon: "fas fa-globe-americas",
      title: "Ouverture",
      description: "Nous embrassons la diversité culturelle et encourageons les échanges internationaux.",
      color: "#ff9a9e"
    },
    {
      icon: "fas fa-seedling",
      title: "Développement",
      description: "Nous nous engageons dans le développement durable et la responsabilité environnementale.",
      color: "#a8edea"
    }
  ];

  const team = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      name: "Dr. Sophie Martin",
      position: "Directrice Générale",
      description: "Docteure en Sciences de l'Éducation avec plus de 20 ans d'expérience dans l'enseignement supérieur.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e13f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      name: "Prof. Jean Dubois",
      position: "Directeur Académique",
      description: "Ancien chercheur au CNRS, spécialiste en intelligence artificielle et innovation pédagogique.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      name: "Mme. Claire Bernard",
      position: "Directrice des Relations Internationales",
      description: "Expert en coopération internationale et développement de partenariats académiques mondiaux.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      name: "Dr. Thomas Moreau",
      position: "Directeur de la Recherche",
      description: "Pionnier dans la recherche interdisciplinaire et coordinateur de projets internationaux.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    }
  ];

  const timeline = [
    {
      year: "1995",
      title: "Fondation de l'Institut",
      description: "Création de l'institut avec une vision innovante de l'éducation supérieure au Bénin.",
      milestone: "fondation"
    },
    {
      year: "2002",
      title: "Première Accréditation Internationale",
      description: "Obtention de la première accréditation internationale pour nos programmes d'ingénierie.",
      milestone: "accréditation"
    },
    {
      year: "2010",
      title: "Ouverture du Campus Principal",
      description: "Inauguration du campus moderne de 10 hectares avec des installations de pointe.",
      milestone: "expansion"
    },
    {
      year: "2018",
      title: "Lancement des Programmes de Recherche",
      description: "Début des programmes de recherche interdisciplinaire et création de 5 laboratoires spécialisés.",
      milestone: "innovation"
    },
    {
      year: "2023",
      title: "Reconnaissance d'Excellence",
      description: "Classement parmi les 10 meilleures institutions d'enseignement supérieur en Afrique de l'Ouest.",
      milestone: "excellence"
    }
  ];

  const stats = [
    { number: "28", label: "Années d'Expérience", suffix: "+" },
    { number: "50", label: "Programmes Académiques", suffix: "+" },
    { number: "10K", label: "Diplômés", suffix: "+" },
    { number: "150", label: "Partenariats", suffix: "+" },
    { number: "95", label: "Taux de Réussite", suffix: "%" },
    { number: "40", label: "Nationalités", suffix: "+" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-word">Notre</span>
                <span className="title-word">Histoire</span>
                <span className="title-word highlight">Inspirante</span>
              </h1>
              <p className="hero-description">
                Depuis 1995, nous cultivons l'excellence académique et formons 
                les leaders innovateurs qui façonnent l'avenir de notre région 
                et au-delà.
              </p>
            </div>
            <div className="hero-visual">
              <div className="floating-stats">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="floating-stat" style={{animationDelay: `${index * 0.5}s`}}>
                    <div className="stat-number">{stat.number}{stat.suffix}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="main-hero-image">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Campus UATM_GASA" 
                  className="hero-image"
                />
                <div className="image-decoration">
                  <div className="decoration-circle circle-1"></div>
                  <div className="decoration-circle circle-2"></div>
                  <div className="decoration-circle circle-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section" ref={missionRef}>
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h2 className="mission-title">Notre Mission</h2>
              <p className="mission-text">
                Offrir une éducation transformative qui allie excellence académique, 
                innovation pédagogique et développement personnel. Nous nous engageons 
                à former des citoyens responsables, créatifs et compétents, prêts à 
                relever les défis du 21ème siècle.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h2 className="mission-title">Notre Vision</h2>
              <p className="mission-text">
                Devenir le pôle d'excellence éducative de référence en Afrique de l'Ouest, 
                reconnu pour l'innovation, la recherche de pointe et l'impact positif 
                sur le développement socio-économique de notre région.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Notre Parcours</h2>
            <p className="section-subtitle">
              Découvrez les moments marquants qui ont façonné notre institution 
              depuis sa création.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item ${item.milestone}`}
                ref={(el) => addToRefs(el, timelineItemsRef)}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nos Valeurs Fondamentales</h2>
            <p className="section-subtitle">
              Ces principes guident chacune de nos actions et définissent notre 
              identité institutionnelle.
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index}
                className="value-card"
                ref={(el) => addToRefs(el, valueCardsRef)}
                style={{ '--value-color': value.color } as React.CSSProperties}
              >
                <div className="value-icon-wrapper">
                  <div className="value-icon-bg"></div>
                  <i className={value.icon}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
                <div className="value-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-circle">
                  <div className="stat-number-wrapper">
                    <span className="stat-number" data-count={stat.number}>
                      {stat.number}
                    </span>
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <svg className="stat-progress" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" className="stat-bg"></circle>
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      className="stat-progress-bar"
                      style={{
                        strokeDasharray: '283',
                        strokeDashoffset: `${283 - (283 * (parseInt(stat.number) / 100))}`
                      }}
                    ></circle>
                  </svg>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Notre Équipe de Direction</h2>
            <p className="section-subtitle">
              Rencontrez les visionnaires qui guident notre institution vers 
              l'excellence et l'innovation.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div 
                key={index}
                className="team-card"
                ref={(el) => addToRefs(el, teamCardsRef)}
              >
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-link">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href={member.social.twitter} className="social-link">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.social.email} className="social-link">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-background">
          <div className="cta-glow"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Prêt à Rejoindre Notre Aventure ?</h2>
            <p className="cta-description">
              Que vous soyez futur étudiant, chercheur ou partenaire, découvrez 
              comment vous pouvez contribuer à notre mission éducative.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">
                <span>Postuler Maintenant</span>
                <i className="fas fa-user-graduate"></i>
              </a>
              <a href="#" className="btn btn-secondary">
                <span>Nous Contacter</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;