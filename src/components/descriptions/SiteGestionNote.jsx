import React, { useEffect } from "react";

export default function NotesGestionPresentation() {
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
                Site de gestion | Notes &amp; Poursuites d&apos;études
              </span>
            </div>

            {/* Project tagline/description */}
            <p className="project-tagline">
              Une application web de gestion moderne pour le suivi des notes et l'éligibilité des étudiants,
              conçue pour être fonctionnelle, fluide et sécurisée.
            </p>

            {/* Image container for the project screenshot */}
            <div className="image-container flex justify-center items-center mb-10">
              <img
                src="https://placehold.co/800x450/01be96/FFFFFF?text=Project+Screenshot"
                alt="Capture d'écran du site de gestion de notes"
                className="project-screenshot rounded-lg shadow-xl max-w-full h-auto"
                // Fallback for image loading errors
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = "https://placehold.co/800x450/CCCCCC/000000?text=Image+Not+Found";
                }}
              />
            </div>

            {/* Section for Project Presentation */}
            <div className="section-heading-group">
              <h1 className="section-title">Présentation du Projet</h1>
              <p className="section-description">
                Ce projet visait à fournir une solution de gestion moderne pour le suivi des étudiants.
                Développé en méthode Agile, il permet aux utilisateurs d'entrer des informations
                concernant les notes des étudiants et de vérifier leur éligibilité pour des programmes
                particuliers. L'application a été conçue pour être à la fois fonctionnelle et fluide,
                facilitant l'accès aux données tout en assurant une gestion efficace et sécurisée,
                grâce à une collaboration étroite avec les clients pour répondre à leurs besoins.
              </p>
            </div>

            {/* Section for Technologies Used */}
            <div className="section-heading-group">
              <h1 className="section-title">Technologies Utilisées</h1>

              {/* Subsection for Backend Technologies */}
              <h2 className="subsection-title">Backend</h2>
              <ul className="tech-list">
                <li>PHP & SQL : Développement back-end pour la gestion des données et des interactions avec la base de données.</li>
              </ul>

              {/* Subsection for Frontend Technologies */}
              <h2 className="subsection-title">Frontend</h2>
              <ul className="tech-list">
                <li>HTML/CSS & JavaScript : Création de pages dynamiques et interactives, en optimisant l'expérience utilisateur.</li>
              </ul>

              {/* Subsection for Project Management Tools */}
              <h2 className="subsection-title">Outils de Gestion de Projet</h2>
              <ul className="tech-list">
                <li>Trello : Pour l'organisation des tâches.</li>
                <li>Lucid : Pour la création des schémas de la base de données.</li>
              </ul>
            </div>

            {/* Section for Skills Acquired */}
            <div className="section-heading-group">
              <h1 className="section-title">Compétences Acquises</h1>
              <ul className="skill-list">
                <li>Mise en œuvre des exigences des clients.</li>
                <li>Création et gestion de bases de données.</li>
                <li>Amélioration des compétences en PHP et SQL.</li>
                <li>Ergonomie et expérience utilisateur.</li>
                <li>Optimisation des requêtes SQL.</li>
                <li>Travail en méthode Agile.</li>
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

      `}</style>
    </>
  );
}
