import React, { useEffect } from "react";

export default function WavyMeteoPresentation() {
  useEffect(() => {
    // Select the element that triggers the bouncing animation
    const titleElement = document.querySelector(".project-title");

    // Ensure the element exists before adding an event listener
    if (titleElement) {
      const toggleBouncing = () => {
        // Add the 'bouncing' class to trigger the animation
        titleElement.classList.add("bouncing");
        // Listen for the animation to end and then remove the class
        titleElement.addEventListener(
          "animationend",
          () => {
            titleElement.classList.remove("bouncing");
          },
          { once: true } // Ensure the event listener is removed after it fires once
        );
      };

      // Add the mouseenter event listener to trigger the animation
      titleElement.addEventListener("mouseenter", toggleBouncing);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        titleElement.removeEventListener("mouseenter", toggleBouncing);
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      {/* Main container for the presentation section */}
      <div className="presentation-section">
        {/* Container for content, providing max-width and centering */}
        <div className="container-content">
          {/* Main text area with background, blur, and shadow */}
          <div className="main-text-area">
            {/* Title block for the main project title */}
            <div className="title-block">
              {/* Project title with bouncing animation trigger */}
              <span className="project-title">
                WAVY – Plateforme de Météo Marine & Communautaire
              </span>
            </div>

            {/* Project tagline/description */}
            <p className="project-tagline">
              <strong>Type de projet :</strong> Projet de groupe (SAE)<br />
              <strong>Rôle :</strong> Développement Fullstack (Focus Backend API & Architecture)<br />
              <strong>Cible :</strong> Passionnés de sports nautiques (Surf, Voile, Plongée)
            </p>

            {/* Image container for the project screenshot */}
            <div className="image-container flex justify-center items-center mb-15">
              <img
                src="/Portfolio/img/wavyMeteo.png"
                alt="Capture d'écran du projet Wavy Météo"
                className="project-screenshot rounded-lg shadow-xl"
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "https://placehold.co/800x450/CCCCCC/000000?text=Wavy+Meteo";
                }}
              />
            </div>

            {/* Section 1: Le Défi */}
            <div className="section-heading-group">
              <h1 className="section-title">1. Le Défi</h1>
              <h2 className="subsection-title">Répondre aux exigences critiques des sportifs de la mer.</h2>
              <p className="section-description">
                La météo marine est bien plus complexe que la météo terrestre. Pour un surfeur ou un navigateur, une approximation n'est pas suffisante. Le défi était de centraliser des données techniques (houle, vent, marées) souvent éparpillées, et de les rendre accessibles en temps réel sur terre (Web) comme en mer (Mobile).
                <br /><br />
                Il fallait également créer un espace communautaire où les pratiquants peuvent échanger sur les conditions réelles des spots ("reports"), créant ainsi une météo participative plus fiable que les simples algorithmes.
              </p>
            </div>

            {/* Section 2: La Solution */}
            <div className="section-heading-group">
              <h1 className="section-title">2. La Solution</h1>
              <h2 className="subsection-title">Une architecture unifiée au service de la précision.</h2>
              <p className="section-description">
                Nous avons conçu une solution technique capable de traiter des données météorologiques marines spécifiques et de les synchroniser parfaitement entre les supports.
              </p>
              <ul className="skill-list">
                <li><strong>API Dédiée (Symfony) :</strong> Développement d'un backend central qui agrège et harmonise les données complexes issues d'APIs météo spécialisées.</li>
                <li><strong>Écosystème Cross-Platform :</strong>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginTop: '10px', color: '#cccccc' }}>
                    <li style={{ padding: '4px 0' }}><strong>Mobile (React Native) :</strong> Pour l'usage "sur le spot". Permet aux utilisateurs de vérifier les conditions de vent ou de vagues juste avant de se mettre à l'eau.</li>
                    <li style={{ padding: '4px 0' }}><strong>Web :</strong> Pour la planification des sessions et l'interaction communautaire avancée.</li>
                  </ul>
                </li>
                <li><strong>Sécurité Stateless (JWT) :</strong> Indispensable, notamment pour l'application mobile qui doit maintenir une connexion sécurisée même avec un réseau côtier parfois instable (passage automatique de la 4G au Wi-Fi, etc.).</li>
              </ul>
            </div>

            {/* Section 3: Le Résultat */}
            <div className="section-heading-group">
              <h1 className="section-title">3. Le Résultat</h1>
              <h2 className="subsection-title">Au-delà de la météo : un outil d'aide à la décision.</h2>
              <p className="section-description">
                Wavy ne se contente pas d'afficher la température, c'est un véritable outil pour les passionnés.
              </p>
              <ul className="skill-list">
                <li><strong>Fonctionnalités "Métier" :</strong> Affichage détaillé des conditions de navigation (force du vent, hauteur de houle), cartographie des spots et gestion des favoris synchronisée.</li>
                <li><strong>Adhésion Communautaire :</strong> Le système permet aux utilisateurs de valider ou corriger les prévisions, créant un lien de confiance fort.</li>
                <li><strong>Performance :</strong> L'architecture séparée (API REST) garantit une fluidité maximale lors du chargement des cartes et des données, crucial pour une consultation rapide en extérieur.</li>
              </ul>
            </div>

            {/* Section 4: Zoom sur la Sécurité & l'API */}
            <div className="section-heading-group">
              <h1 className="section-title">Zoom sur la Sécurité & l'API</h1>

              <h2 className="subsection-title">Sécurité des données utilisateurs</h2>
              <p className="section-description">
                Dans un contexte où l'utilisateur se déplace (changement d'IP fréquent sur mobile) :
              </p>
              <ul className="skill-list">
                <li><strong>Authentification JWT & Refresh Tokens :</strong> J'ai implémenté un système de double token. Le Refresh Token est stocké de manière sécurisée et permet de renouveler la session automatiquement sans que l'utilisateur n'ait à retaper son mot de passe sur son smartphone, garantissant une expérience fluide et sûre.</li>
              </ul>

              <h2 className="subsection-title">Architecture API RESTful</h2>
              <p className="section-description">
                Le cœur du réacteur est l'API Symfony que j'ai conçue :
              </p>
              <ul className="skill-list">
                <li>Elle agit comme une passerelle intelligente : elle reçoit les requêtes de l'app mobile (ex: "Donne-moi la houle à Biarritz"), interroge les services météo tiers, met en forme la donnée, et la renvoie au format JSON optimisé pour le mobile (faible consommation de data).</li>
              </ul>
            </div>

            {/* Section 5: Stack Technique */}
            <div className="section-heading-group">
              <h1 className="section-title">Stack Technique</h1>
              <ul className="tech-list">
                <li><strong>Backend & API :</strong> Symfony 6.4, API Platform, PHP 8.</li>
                <li><strong>Mobile :</strong> React Native, Expo (iOS/Android).</li>
                <li><strong>Base de données :</strong> MySQL, Doctrine ORM.</li>
                <li><strong>Sécurité :</strong> Lexik JWT Authentication Bundle.</li>
                <li><strong>Infrastructure :</strong> Docker (Environnement de dév. unifié).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Inline style block for the component's CSS */}
      <style>{`
        /* Base styles for a dark theme */
        body {
          background-color: #000; /* Pure black background */
          color: #f6f6f9; /* Off-white text for contrast */
          font-family: 'Segoe UI', 'Roboto', sans-serif; /* Modern, clean font */
          margin: 0;
          padding: 0;
          line-height: 1.6; /* Improved readability */
        }

        .presentation-section {
          position: relative;
          width: 100%;
          min-height: 100vh; /* Ensure it takes full viewport height */
          display: flex;
          justify-content: center;
          padding: 80px 0; /* More vertical padding for desktop */
          box-sizing: border-box; /* Include padding in element's total width and height */
        }

        .container-content {
          width: 90%;
          max-width: 1200px; /* Max width for content to prevent overly long lines */
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px; /* Space between major content blocks */
        }

        .main-text-area {
          padding: 20px;
          border-radius: 10px;
          background-color: rgba(10, 10, 10, 0.7); /* Slightly lighter black for content background */
          backdrop-filter: blur(5px); /* Subtle blur for modern feel */
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4); /* Soft shadow for depth */
        }

        /* Titles and Headings */
        .title-block {
          margin-bottom: 30px;
          text-align: center;
        }

        .project-title {
          font-size: 3.5em; /* Larger, more impactful title */
          font-weight: 900;
          color: #01be96; /* Vibrant accent color */
          letter-spacing: 0.1em; /* Slight letter spacing for impact */
          text-transform: uppercase;
          display: inline-block;
          cursor: pointer;
          text-shadow: 0 0 15px rgba(1, 190, 150, 0.6); /* Glow effect */
          transition: transform 0.2s ease-out;
        }

        .project-title:hover {
          transform: scale(1.02); /* Slight scale on hover */
        }

        .project-tagline {
          font-size: 1.3em;
          text-align: center;
          max-width: 800px; /* Constrain width for readability */
          margin: 0 auto 50px auto;
          color: #a0a0a0; /* Softer gray for taglines */
        }

        .section-heading-group {
          margin-bottom: 40px; /* Space between sections */
        }

        .section-title {
          font-size: 2.5em;
          color: #01be96;
          margin-bottom: 20px;
          border-bottom: 2px solid rgba(1, 190, 150, 0.3); /* Subtle separator */
          padding-bottom: 10px;
          text-align: left;
        }

        .subsection-title {
          font-size: 1.8em;
          color: #f6f6f9;
          margin-top: 30px;
          margin-bottom: 15px;
          text-align: left;
        }

        .section-description {
          font-size: 1.1em;
          color: #cccccc;
          line-height: 1.8;
          margin-bottom: 20px;
          text-align: left;
        }

        /* Lists */
        ul {
          list-style: none; /* Remove default bullet points */
          padding: 0;
          margin: 0;
        }

        .tech-list li,
        .skill-list li {
          font-size: 1.1em;
          padding: 8px 0;
          color: #f6f6f9;
          position: relative;
          padding-left: 25px; /* Space for custom bullet point */
          transition: color 0.3s ease;
        }

        .tech-list li::before,
        .skill-list li::before {
          content: '•'; /* Custom bullet point */
          color: #01be96; /* Accent color for bullet */
          font-size: 1.2em;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .tech-list li:hover,
        .skill-list li:hover {
          color: #01be96; /* Highlight on hover */
        }

        /* Bouncing Animation */
        .bouncing {
          animation: rubberband 0.8s ease-out forwards;
        }

        @keyframes rubberband {
          0% { transform: scaleX(1); }
          30% { transform: scaleX(1.05) scaleY(0.95); }
          45% { transform: scaleX(0.95) scaleY(1.05); }
          60% { transform: scaleX(1.02) scaleY(0.98); }
          75% { transform: scaleX(0.98) scaleY(1.02); }
          100% { transform: scaleX(1) scaleY(1); }
        }

        /* Responsive adjustments (basic for completeness, but focused on desktop) */
        @media (max-width: 768px) {
          .project-title {
            font-size: 2.5em;
          }
          .section-title {
            font-size: 2em;
          }
          .subsection-title {
            font-size: 1.5em;
          }
          .project-tagline, .section-description, .tech-list li, .skill-list li {
            font-size: 1em;
          }
          .main-text-area {
            padding: 15px;
          }
          .presentation-section {
            padding: 50px 0;
          }
        }

        @media (max-width: 480px) {
          .project-title {
            font-size: 2em;
            letter-spacing: 0.05em;
          }
          .section-title {
            font-size: 1.8em;
          }
          .subsection-title {
            font-size: 1.3em;
          }
        }

        /* Optional: background gradient for subtle visual interest */
        .presentation-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top left, rgba(1, 190, 150, 0.15) 0%, transparent 40%),
                      radial-gradient(circle at bottom right, rgba(1, 190, 150, 0.15) 0%, transparent 40%);
          z-index: -1; /* Behind content */
          opacity: 0.7;
        }

         /* Styles for project screenshot */
        .project-screenshot {
          max-width: 70%; /* Réduire la taille maximale de l'image à 70% de son conteneur */
          height: auto; /* Maintient le ratio d'aspect */
          display: block; /* Assure que l'image se comporte comme un bloc */
          margin: 0 auto; /* Centre l'image horizontalement */
          object-fit: contain; /* Assure que l'image entière est visible sans être coupée */
        }

      `}</style>
    </>
  );
}
