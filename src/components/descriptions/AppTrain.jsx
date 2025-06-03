import { useEffect } from "react";

export default function TrainsPresentation() {
  useEffect(() => {
    const letters = document.querySelectorAll(".bouncing-text-trigger");
    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        toggle(letter);
      });
    });

    function toggle(letter) {
      letter.classList.add("bouncing");
      letter.addEventListener(
        "animationend",
        () => {
          letter.classList.remove("bouncing");
        },
        { once: true }
      );
    }

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener("mouseenter", toggle);
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

            <div className="section-heading-group">
              <h1 className="section-title">Présentation du Projet</h1>
              <p className="section-description">
                Implémentation digitale du jeu de plateau Trains, où les joueurs construisent
                des réseaux ferroviaires autour de Tokyo ou d’Osaka. Développé dans le cadre
                du BUT Informatique à l’IUT Montpellier-Sète.
              </p>
            </div>

            <div className="section-heading-group">
              <h1 className="section-title">Technologies Utilisées</h1>

              <h2 className="subsection-title">Backend</h2>
              <ul className="tech-list">
                <li>Java</li>
                <li>Sockets pour la communication client-serveur</li>
                <li>Maven pour la gestion de projet</li>
                <li>JavaFX pour la version desktop</li>
              </ul>

              <h2 className="subsection-title">Frontend</h2>
              <ul className="tech-list">
                <li>Angular pour l’interface web</li>
                <li>HTML5/CSS3</li>
                <li>WebSockets pour la communication en temps réel</li>
              </ul>

              <h2 className="subsection-title">Infrastructure</h2>
              <ul className="tech-list">
                <li>Serveur dédié pour l’hébergement backend et frontend</li>
                <li>Configuration Apache pour le déploiement web</li>
              </ul>
            </div>

            <div className="section-heading-group">
              <h1 className="section-title">Compétences Acquises</h1>
              <ul className="skill-list">
                <li>Programmation Orientée Objet avancée en Java</li>
                <li>Communication client-serveur avec les WebSockets</li>
                <li>Configuration et déploiement de projets Maven</li>
                <li>Développement d’interfaces utilisateur avec JavaFX et Angular</li>
                <li>Architecture logicielle (Pattern MVC)</li>
                <li>Déploiement full-stack sur serveur</li>
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