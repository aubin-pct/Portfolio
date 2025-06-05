import React, { useEffect, useState } from "react";

export default function VeryBadSplitPresentation() {
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
              <span className="bouncing-text-trigger project-title">SAE – Very Bad Split</span>
            </div>

            <p className="project-tagline">
              Application Web de gestion du financement événementiel.
            </p>

            {/* Section pour l'image du projet */}
            <div className="image-container flex justify-center items-center mb-10">
              <img
                src=""
                alt="Capture d'écran de Very Bad Split - projet en cours"
                className="project-screenshot rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/800x450/CCCCCC/000000?text=Image+Not+Found";
                }}
              />
            </div>

            {/* Section Présentation du Projet (réintégrée) */}
            <div className="section-heading-group">
              <h1 className="section-title">Présentation du Projet</h1>
              <p className="section-description">
                Une application de budgétisation événementielle full-stack développée en PHP (MVC-S),
              enrichie d'une bibliothèque JavaScript de réactivité sur mesure et d'une API REST.
              Les utilisateurs peuvent créer des événements, inviter des membres, enregistrer leurs dépenses
              et calculer automatiquement le solde de leurs dettes en fonction de leur participation aux dépenses partagées.
              Le projet est né d'une application défaillante présentant des failles de sécurité, une base de données
              à table unique et une absence de séparation des tâches. Nous avons entièrement restructuré et reconstruit le système.
              </p>
            </div>

            {/* Nouvelle section : Analyse Détaillée du Projet */}
            <div className="section-heading-group">
              <h1 className="section-title">Analyse Détaillée du Projet</h1>

              <h2 className="subsection-title">Contexte et Réalisation</h2>
              <ul className="tech-list">
                <li><strong>Durée du projet :</strong> Janvier 2024 - Juin 2024 (un semestre).</li>
                <li><strong>Travail :</strong> Projet réalisé en groupe de 4 étudiants.</li>
                <li><strong>Contexte :</strong> L'application originale était dépourvue d'architecture, était criblée de vulnérabilités et utilisait une base de données qui n'était même pas en première forme normale.</li>
                <li><strong>Défi :</strong> Auditer, refactoriser et sécuriser le code, normaliser la base de données étape par étape et moderniser l'interface grâce à la réactivité et aux appels d'API asynchrones.</li>
              </ul>

              <h2 className="subsection-title">Votre Rôle et Responsabilités</h2>
              <ul className="tech-list">
                <li>Analyse et documentation des failles de sécurité (SQLi, XSS, authentification faible).</li>
                <li>Repenser et normaliser le schéma de la base de données en 3NF avec justification.</li>
                <li>Implémentation des services principaux et des points de terminaison de l'API de l'application en PHP.</li>
                <li>Développement de la couche de réactivité en JavaScript pour rendre l'interface utilisateur entièrement interactive sans rechargement de page.</li>
                <li>Participation à la virtualisation du projet avec Docker Compose.</li>
                <li>Création d'une couche service dans l'architecture MVC pour faciliter la testabilité et la gestion des erreurs.</li>
                <li>Implémentation d'une API et optimisation du calcul des dettes.</li>
              </ul>

              <h2 className="subsection-title">Technologies Utilisées</h2>
              <ul className="tech-list">
                <li><strong>Backend :</strong> PHP (MVC-S), MySQL, REST API.</li>
                <li><strong>Frontend :</strong> JavaScript, bibliothèque réactive personnalisée, Twig, AJAX.</li>
                <li><strong>Virtualisation :</strong> Docker, Docker Compose.</li>
              </ul>

              <h2 className="subsection-title">Compétences Développées</h2>
              <ul className="skill-list">
                <li>Audit de la qualité et de la sécurité des applications, puis proposition et application d'améliorations structurelles.</li>
                <li>Reconstruction d'un modèle de base de données en appliquant une normalisation (1NF → 3NF) avec des décompositions documentées.</li>
                <li>Implémentation d'une architecture back-end sécurisée et d'une API REST avec authentification JWT.</li>
                <li>Création d'une interface utilisateur dynamique avec une couche JavaScript réactive personnalisée et une consommation d'API.</li>
                <li>Application de l'architecture MVC-S et introduction de services modulaires et de tests unitaires avec PHPUnit.</li>
                <li>Utilisation de Docker et Docker Compose pour une virtualisation complète des services et une cohérence de l'environnement.</li>
              </ul>

              <h2 className="subsection-title">Points Clés à Retenir</h2>
              <ul className="skill-list">
                <li>Approfondissement des connaissances des pratiques professionnelles de refactoring.</li>
                <li>Renforcement des compétences en qualité du code, sécurité, modélisation de bases de données, conception d'API.</li>
                <li>Maîtrise du découplage front-end/back-end et du déploiement de projets full-stack grâce à la conteneurisation.</li>
                <li>Amélioration de la testabilité et de la gestion des erreurs grâce à la couche service.</li>
                <li>Optimisation des performances avec l'optimisation du calcul des dettes.</li>
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
        .image-carousel-container {
          width: 100%;
          max-width: 800px; /* Limite la largeur du carrousel */
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* Ratio 16:9 pour l'image */
          height: 0;
        }

        /* Styles for project screenshot */
        .project-screenshot {
          max-width: 70%; /* Réduire la taille maximale de l'image à 70% de son conteneur */
          height: auto; /* Maintient le ratio d'aspect */
          display: block; /* Assure que l'image se comporte comme un bloc */
          margin: 0 auto; /* Centre l'image horizontalement */
          object-fit: contain; /* Assure que l'image entière est visible sans être coupée */
        }

        .carousel-button {
          padding: 10px 15px;
          font-size: 1.5em;
          border: none;
          cursor: pointer;
          z-index: 10;
        }

        .image-counter {
          margin-top: 10px;
          font-size: 0.9em;
        }
      `}</style>
    </>
  );
}
