import React, { useEffect } from "react";

export default function OcrCnnProjectPresentation() {
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
                Reconnaissance de Chiffres (CNN)
              </span>
            </div>

            {/* Project tagline/description */}
            <p className="project-tagline">
              Développement d'un prototype "end-to-end" intégrant un modèle de Deep Learning dans une application web pour identifier et interpréter des chiffres dessinés à la main en temps réel.
            </p>

            {/* Image container for the project screenshot */}
            <div className="image-container flex justify-center items-center mb-15">
              <img
                src="/Portfolio/img/ocr_project.png"
                alt="Capture d'écran du projet OCR"
                className="project-screenshot rounded-lg shadow-xl"
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "https://placehold.co/800x450/CCCCCC/000000?text=OCR+Project";
                }}
              />
            </div>

            {/* Section for Project Presentation */}
            <div className="section-heading-group">
              <h1 className="section-title">Présentation du Projet</h1>
              <p className="section-description">
                Ce projet a été réalisé lors d'un stage de R&D chez Datanovate (Janv. 2025 - Mars 2025). L'objectif était de concevoir et développer un modèle de reconnaissance d'images (OCR) pour l'identification de caractères numériques.
                <br /><br />
                Le défi technique majeur résidait dans la mise en place d'un pipeline de traitement d'image complet : transformer un dessin brut réalisé sur un canvas HTML5 en une donnée exploitable par une IA. J'ai implémenté un pré-traitement rigoureux en Python (décodage Base64, conversion niveaux de gris, redimensionnement 28x28, normalisation) pour assurer la compatibilité avec le modèle.
              </p>
            </div>

            {/* Nouvelle section : Analyse Détaillée du Projet */}
            <div className="section-heading-group">
              <h1 className="section-title">Analyse Détaillée du Projet</h1>

              <h2 className="subsection-title">Contexte et Réalisation</h2>
              <ul className="tech-list">
                <li><strong>Contexte :</strong> Stage de R&D chez Datanovate (Computer Vision & Machine Learning).</li>
                <li><strong>Objectif :</strong> Créer un modèle OCR pour chiffres manuscrits.</li>
                <li><strong>Missions :</strong> Conception modèle, Data Preprocessing, Entraînement, Veille technologique.</li>
              </ul>

              <h2 className="subsection-title">Solution Technique</h2>
              <p className="section-description">
                Le cœur du système repose sur un Réseau de Neurones Convolutif (CNN) entraîné avec Keras/TensorFlow. L'architecture comprend des couches de convolution (Conv2D) pour l'extraction de caractéristiques, suivies de pooling (MaxPooling2D) et de couches denses.
                <br /><br />
                Pour la production, j'ai conçu un script de conversion automatisé transformant le modèle .h5 en format ONNX. Une fonctionnalité "boîte blanche" permet de visualiser les sorties des couches intermédiaires pour comprendre comment l'IA "voit" l'image.
              </p>

              <h2 className="subsection-title">Points Forts</h2>
              <ul className="skill-list">
                <li><strong>Architecture découplée :</strong> Séparation nette entre frontend, pré-traitement et moteur d'inférence ONNX.</li>
                <li><strong>Optimisation cross-platform :</strong> Script de conversion robuste (h5 vers ONNX) gérant les spécificités OS.</li>
                <li><strong>Introspection du modèle :</strong> Visualisation des "feature maps" en temps réel pour l'explicabilité.</li>
              </ul>
            </div>

            {/* Section for Technologies Used */}
            <div className="section-heading-group">
              <h1 className="section-title">Technologies Utilisées</h1>

              {/* Subsection for Backend Technologies */}
              <h2 className="subsection-title">Langages & Web</h2>
              <ul className="tech-list">
                <li>Python 3.9</li>
                <li>JavaScript (ES6)</li>
                <li>Flask, Jinja2, HTML5 Canvas</li>
              </ul>

              {/* Subsection for AI/ML */}
              <h2 className="subsection-title">Machine Learning & IA</h2>
              <ul className="tech-list">
                <li>TensorFlow/Keras (Architecture CNN)</li>
                <li>ONNX & ONNX Runtime (Inférence)</li>
                <li>Pillow (PIL), NumPy (Traitement d'image)</li>
              </ul>
            </div>

            {/* Section for Skills Acquired */}
            <div className="section-heading-group">
              <h1 className="section-title">Compétences Acquises</h1>
              <ul className="skill-list">
                <li>Conception de réseaux de neurones convolutifs (CNN).</li>
                <li>Pipeline de traitement d'image (Data Preprocessing).</li>
                <li>Mise en production de modèles IA (ONNX).</li>
                <li>Développement Full Stack avec intégration IA (Flask/JS).</li>
                <li>R&D et veille technologique en Computer Vision.</li>
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
