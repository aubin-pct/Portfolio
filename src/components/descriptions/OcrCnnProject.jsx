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
              <span className="project-title" style={{ fontSize: "3rem" }}>
                OCR & Vision par Ordinateur : Reconnaissance Robuste et Architecture Hybride
              </span>
            </div>

            {/* Project tagline/description */}
            <div className="project-tagline">
              <p><strong>Type de projet :</strong> Stage R&D / Projet d'apprentissage</p>
              <p><strong>Rôle :</strong> Stagiaire R&D</p>
            </div>

            {/* Image container for the project screenshot */}
            <div className="image-container flex justify-center items-center mb-15">
              <img
                src="/Portfolio/img/ocr_project.png"
                alt="Architecture du réseau de neurones CNN : visualisation du pipeline complet depuis l'image normalisée 28x28, passage par les couches de convolution, reshape en vecteur de 128 dimensions, traitement par les couches cachées (512 unités), jusqu'aux prédictions finales avec 99.96% de confiance pour le chiffre 2"
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
              <h1 className="section-title">Le Défi : Dépasser les limites académiques</h1>
              <p className="section-description">
                Dans le cadre de ce stage de R&D, l'objectif n'était pas seulement de répondre à un besoin technique, mais d'utiliser un cas d'usage classique — la reconnaissance de chiffres manuscrits — comme vecteur d'apprentissage approfondi du Deep Learning.
                <br /><br />
                Les modèles standards (type CNN) excellent sur des données académiques parfaites comme le dataset MNIST, mais leur performance s'effondre souvent en conditions réelles face à des données "sales". Le défi technique principal était donc de <strong>construire une IA résiliente</strong>, capable de "lire" des chiffres fortement dégradés (rotations, bruit, zoom, décentrage), pour comprendre et maîtriser les mécanismes profonds de la robustesse en Vision par Ordinateur.
              </p>
            </div>

            {/* Section : La Solution */}
            <div className="section-heading-group">
              <h1 className="section-title">La Solution : Une Hybridation CNN-RNN</h1>
              <p className="section-description">
                Pour pallier les limites de la vision classique, j'ai conçu et implémenté une architecture neuronale innovante couplant deux approches complémentaires :
              </p>
              <ul className="tech-list mb-6">
                <li>
                  <strong>L'œil (CNN) :</strong> Une série de couches de convolution (inspirées d'architectures éprouvées) pour extraire les caractéristiques visuelles locales de l'image.
                  <br />
                  <small>Pipeline : Image normalisée 28x28 → Couches de Convolution + Pooling → Reshape en vecteur de 128 dimensions.</small>
                </li>
                <li>
                  <strong>Le contexte (RNN/GRU) :</strong> L'intégration de couches récurrentes (GRU Bidirectionnelles, optimisées à 512 unités) permet au modèle d'analyser la cohérence spatiale et séquentielle des caractéristiques extraites. Cela donne au réseau une forme de "mémoire" contextuelle, lui permettant de reconnaitre un chiffre même lorsqu'il est tordu, incomplet ou bruité.
                </li>
              </ul>
              <p className="section-description">
                Un exemple marquant de cette robustesse est la capacité du modèle à maintenir des prédictions de très haute confiance (ex: <strong>99.96%</strong> pour un chiffre 2) même sur des échantillons altérés.
                <br /><br />
                <strong>Validation Scientifique :</strong> Cette architecture a été validée par une méthodologie rigoureuse incluant une <strong>Data Augmentation massive</strong> (120 000 images générées incluant des variations géométriques et des imperfections de placement), une <strong>Validation Croisée</strong> (5-folds) et une <strong>optimisation bayésienne</strong> des hyperparamètres via Keras Tuner.
              </p>
            </div>

            {/* Section : Le Résultat */}
            <div className="section-heading-group">
              <h1 className="section-title">Le Résultat : Performance technique et expertise acquise</h1>
              <p className="section-description">
                Sur le plan technique, l'approche hybride CNN-RNN a permis une réduction significative du taux d'erreur : <strong>-9,35%</strong> par rapport aux solutions standards sur nos jeux de données bruités de test.
                <br /><br />
                Au-delà de la performance brute, ce projet a transformé une exploration académique en un savoir-faire technique concret, couvrant l'intégralité du pipeline de Computer Vision : de la théorie fondamentale aux stratégies avancées de pré-traitement et d'optimisation.
              </p>
            </div>

            {/* Section : Mon Entraînement */}
            <div className="section-heading-group">
              <h1 className="section-title">Mon Entraînement : Une Montée en Compétence Itérative</h1>
              <p className="section-description">
                Avant d'aboutir à cette solution hybride, j'ai suivi un parcours structuré en plusieurs étapes clés ("Rendus"), me permettant de maîtriser progressivement les fondements de l'IA :
              </p>
              <ul className="skill-list">
                <li><strong>Bases Algorithmiques (Rendu 1) :</strong> Création d'outils de dessin et de traitement d'image ("from scratch") pour comprendre la normalisation et le formatage des données (mise aux normes MNIST).</li>
                <li><strong>Mathématiques du Machine Learning (Rendus 2 & 3) :</strong> Implémentation manuelle de régressions linéaires et polynomiales. Étude des indicateurs d'erreur (MSE, R²) pour appréhender la notion de fonction de coût.</li>
                <li><strong>Analyse de Données & Classifiction (Rendu 4) :</strong> Exploration de la réduction de dimensionnalité (PCA) et comparaison de modèles classiques (Régression Logistique Ordinale vs SVM) sur des tâches de classification.</li>
                <li><strong>Réseaux de Neurones (Rendus 5, 6 & 7) :</strong> Passage au Deep Learning avec l'implémentation de Perceptrons Multi-Couches (MLP), d'abord théorique puis via TensorFlow/Keras. Application à des cas concrets (classification dermatologique) avec gestion du déséquilibre des classes.</li>
                <li><strong>Vision par Ordinateur (Rendu 8) :</strong> Première approche des CNN (Réseaux de Neurones Convolutifs) pour la classification d'images, posant les bases de l'architecture finale.</li>
              </ul>
              <p className="section-description mt-4">
                Ce parcours progressif m'a permis de ne pas simplement "utiliser" des librairies, mais de comprendre la logique mathématique et algorithmique derrière chaque couche du modèle final.
              </p>
            </div>

            {/* Section for Technologies Used */}
            <div className="section-heading-group">
              <h1 className="section-title">Stack Technique</h1>

              <ul className="tech-list">
                <li><strong>Core & Environnement :</strong> Python 3.9</li>
                <li><strong>Deep Learning :</strong> TensorFlow / Keras (Architecture Hybride Custom), Keras Tuner (Optimisation bayésienne)</li>
                <li><strong>Data Science :</strong> NumPy, Pandas, scikit-learn (PCA, SVM, Métriques)</li>
                <li><strong>Méthodologie :</strong> Cross-Validation (5-folds), Data Augmentation Avancée, Études d'ablation</li>
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
