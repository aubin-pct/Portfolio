import { useEffect } from "react";

export default function TrainsPresentation() {
  useEffect(() => {
    const letters = document.querySelectorAll(".bouncing-text-trigger");
    letters.forEach((letter) => {
      // Create a unique handler for each letter to ensure it's removed correctly
      const handleMouseEnter = () => {
        letter.classList.add("bouncing");
        letter.addEventListener(
          "animationend",
          () => {
            letter.classList.remove("bouncing");
          },
          { once: true }
        );
      };
      letter.addEventListener("mouseenter", handleMouseEnter);

      // Store the handler on the element itself to remove it later
      letter.__bouncingHandler = handleMouseEnter;
    });

    return () => {
      letters.forEach((letter) => {
        // Use the stored handler to remove the event listener
        if (letter.__bouncingHandler) {
          letter.removeEventListener("mouseenter", letter.__bouncingHandler);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="presentation-section">
        <div className="container-content">
          <div className="main-text-area">
            <div className="title-block">
              <span className="bouncing-text-trigger project-title">Trains - Jeu</span>
            </div>

            <p className="project-tagline">
              Un jeu inspiré de la gestion ferroviaire, où les joueurs construisent des réseaux,
              optimisent les trajets et gèrent leurs ressources pour atteindre leurs objectifs.
              Ce projet met l'accent sur la stratégie et la réflexion.
            </p>

            {/* Section pour l'image du projet */}
            <div className="image-container flex justify-center items-center mb-10">
              <img
                src="/Portfolio/img/image_train.png"
                alt="Capture d'écran du jeu Trains"
                className="project-screenshot rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x450/CCCCCC/000000?text=Image+Not+Found";
                }}
              />
            </div>

            <div className="section-heading-group">
              <h1 className="section-title">Présentation du Projet</h1>
              <p className="section-description">
                Implémentation digitale du jeu de plateau Trains, où les joueurs construisent
                des réseaux ferroviaires autour de Tokyo ou d’Osaka. Développé dans le cadre
                du BUT Informatique à l’IUT Montpellier-Sète.
              </p>
            </div>

            {/* Nouvelle section : Analyse Détaillée du Projet */}
            <div className="section-heading-group">
              <h1 className="section-title">Analyse Détaillée du Projet</h1>

              <h2 className="subsection-title">Contexte et Réalisation</h2>
              <ul className="tech-list">
                <li><strong>Durée du projet :</strong> Janvier 2024 - Juin 2024 (un semestre).</li>
                <li><strong>Travail :</strong> Projet réalisé en équipe de 3 étudiants.</li>
                <li><strong>Objectif :</strong> Transposer un jeu de société sur ordinateur en respectant ses règles et sa mécanique, offrant une expérience immersive et fonctionnelle.</li>
                <li><strong>Description :</strong> J'ai participé au développement d'une version numérique d'un jeu de société en Java, adoptant une approche orientée objet pour modéliser le jeu et créer une version fonctionnelle à travers une interface interactive. Les principales fonctionnalités incluent la gestion des cartes, le placement des rails et l'exécution des actions de jeu, avec une modélisation précise des interactions entre cartes, plateau et règles pour garantir une jouabilité fluide.</li>
              </ul>

              <h2 className="subsection-title">Rôle et Responsabilités</h2>
              <ul className="tech-list">
                <li>Développement des mécanismes essentiels du jeu : gestion des cartes, placement des rails et interactions entre les joueurs.</li>
                <li>Conception d'une interface utilisateur intuitive et ergonomique avec JavaFX pour faciliter la navigation et la visualisation des actions en temps réel.</li>
                <li>Conception d'algorithmes pour les actions des cartes impactant le plateau, assurant une expérience fluide et cohérente.</li>
                <li>Mise en place de tests unitaires pour vérifier la robustesse du jeu et assurer la fiabilité des fonctionnalités.</li>
                <li>Concentration significative sur la <strong>logique du jeu</strong> et la gestion des cartes, en particulier la gestion des actions des joueurs et leur interaction avec le plateau.</li>
              </ul>

              <h2 className="subsection-title">Compétences Techniques Acquises</h2>
              <ul className="skill-list">
                <li><strong>Développement Java :</strong> Maîtrise avancée de la programmation orientée objet en Java pour les mécanismes du jeu.</li>
                <li><strong>Interface Utilisateur :</strong> Développement d'interfaces interactives avec JavaFX pour une expérience utilisateur fluide.</li>
                <li><strong>Tests Unitaires :</strong> Application rigoureuse des tests pour garantir la fiabilité et la pérennité des fonctionnalités.</li>
                <li><strong>Conception Algorithmique :</strong> Création d'algorithmes pour la gestion des cartes, le placement des rails et les actions des joueurs.</li>
                <li><strong>Structures de Données :</strong> Utilisation de structures de données adaptées pour optimiser la gestion des éléments du jeu.</li>
                <li><strong>Qualité du Code :</strong> Respect des bonnes pratiques de développement pour un code propre, lisible et maintenable.</li>
                <li><strong>Sécurité du Code :</strong> Application des principes de sécurité pour éviter les failles potentielles.</li>
                <li><strong>Anciennes technologies (si applicable) :</strong> Sockets (communication client-serveur), Maven (gestion de projet), WebSockets (communication temps réel).</li>
              </ul>

              <h2 className="subsection-title">Compétences Humaines Acquises</h2>
              <ul className="skill-list">
                <li><strong>Travail en Équipe :</strong> Collaboration efficace au sein d'une équipe de 3 pour la coordination et la cohérence du projet.</li>
                <li><strong>Gestion de Projet :</strong> Capacité à respecter les délais et à organiser le travail en équipe.</li>
                <li><strong>Rigueur et attention aux détails :</strong> Développement d'une grande rigueur essentielle pour la logique complexe du jeu et la prévention des erreurs critiques.</li>
                <li><strong>Ergonomie et Accessibilité :</strong> Prise en compte de l'expérience utilisateur pour une interface intuitive.</li>
              </ul>

              <h2 className="subsection-title">Principaux Enseignements</h2>
              <ul className="skill-list">
                <li>Consolidation des compétences en Java, en développement orienté objet et en conception d'interface utilisateur.</li>
                <li>Renforcement des aptitudes en tests unitaires et en gestion de projet collaboratif.</li>
                <li>Apprentissage de l'importance de la rigueur et de la logique dans le développement de systèmes complexes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
          .project-screenshot {
            max-width: 90%; /* Plus large sur les petits écrans */
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
