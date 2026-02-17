import React, { useEffect } from "react";

export default function FirstRagProject() {
  useEffect(() => {
    const titleElement = document.querySelector(".project-title");

    if (titleElement) {
      const toggleBouncing = () => {
        titleElement.classList.add("bouncing");
        titleElement.addEventListener(
          "animationend",
          () => {
            titleElement.classList.remove("bouncing");
          },
          { once: true }
        );
      };

      titleElement.addEventListener("mouseenter", toggleBouncing);

      return () => {
        titleElement.removeEventListener("mouseenter", toggleBouncing);
      };
    }
  }, []);

  return (
    <>
      <div className="presentation-section">
        <div className="container-content">
          <div className="main-text-area">
            <div className="title-block">
              <span className="project-title">First-RAG : Architecture RAG Avancée & Apprentissage</span>
            </div>

            <p className="project-tagline">
              <strong>Type de projet :</strong> Projet d'apprentissage approfondi
              <br />
              <strong>Rôle :</strong> Conception et implémentation complète d'un pipeline RAG modulaire
              <br />
              <strong>Démo portfolio :</strong> Une version légèrement simplifiée sera disponible pour test utilisateur
            </p>

            <div className="section-heading-group rag-cta-wrap">
              <a className="rag-cta-button" href="/Portfolio/ragChat" target="_blank" rel="noreferrer">
                tester le rag
              </a>
            </div>

            <div className="section-heading-group">
              <h1 className="section-title">Objectifs & Apprentissage</h1>
              <p className="section-description">
                L'ambition principale de ce projet était de déconstruire et comprendre chaque composant d'un pipeline RAG moderne.
              </p>

              <h2 className="subsection-title">Concepts Clés Maîtrisés</h2>
              <p className="section-description">À travers ce développement, j'ai exploré et implémenté les concepts suivants :</p>
              <ul className="skill-list">
                <li><strong>Vector Embeddings & Semantic Search</strong> : Compréhension de la projection de texte en vecteurs denses (via <code>Sentence Transformers</code>) pour capturer le sens au-delà des simples mots-clés. J'ai appris comment les embeddings transforment la sémantique en distance mathématique (Similarité cosinus).</li>
                <li><strong>Stratégies de Chunking Avancées</strong> : Apprentissage des nuances entre un découpage naïf (par caractères) et le <strong>Chunking Sémantique</strong> (découper dynamiquement là où le sens change), essentiel pour ne pas tronquer les idées.</li>
                <li><strong>Indexation Avancée (Parent-Child)</strong> : Mise en œuvre du pattern <strong>Parent-Child Indexing</strong> pour découpler "ce qu'on cherche" (petits fragments précis pour le vecteur) de "ce qu'on donne au LLM" (bloc parent complet pour le contexte). Cela résout le problème de perte de contexte fréquent dans les RAG simples.</li>
                <li><strong>Reranking & Cross-Encoders</strong> : Comprendre le phénomène "Lost in the Middle" et pourquoi la recherche vectorielle bi-encoder manque parfois de précision fine. L'intégration d'un <strong>Cross-Encoder</strong> (BGE) m'a permis de réévaluer la pertinence réelle des documents retrouvés avant l'étape de génération.</li>
                <li><strong>Architecture Modulaire & Design Patterns</strong> : Conception d'un pipeline flexible (Router, Loader, Retriever) permettant de changer de composants (ex: passer de ChromaDB à PGVector) sans refondre le système.</li>
              </ul>
            </div>

            <div className="section-heading-group">
              <h1 className="section-title">Choix Techniques & Alternatives</h1>

              <h2 className="subsection-title">1. Vision et Parsing de Documents : Le Défi des Tableaux</h2>
              <ul className="skill-list">
                <li><strong>Choix retenu : LlamaParse</strong><br /><em>Pourquoi ?</em> C'est une solution spécialisée qui reconstruit la structure des documents (tableaux, titres) en Markdown. Cela permet au LLM de "comprendre" la structure spatiale des données sans voir l'image.</li>
                <li><strong>Alternative envisagée : LLM Multimodaux Vision</strong><br /><em>Concept</em> : Envoyer directement les images des pages PDF au LLM pour qu'il "lise" visuellement le document.<br /><em>Pourquoi pas ?</em> Bien que très performant, le <strong>coût aurait explosé</strong> pour de gros volumes documentaires. Un PDF de 100 pages traité page par page en vision est extrêmement coûteux en tokens. LlamaParse offre un compromis "one-shot" beaucoup plus économique et suffisant pour mon cas.</li>
              </ul>

              <h2 className="subsection-title">2. Modèle de Langage</h2>
              <ul className="skill-list">
                <li><strong>Développement : Ollama (Local)</strong><br /><em>Pourquoi ?</em> J'ai utilisé <strong>Ollama</strong> pour faire tourner les modèles (Llama 3) entièrement en local pendant la phase de développement. Cela m'a permis d'itérer rapidement sans coût, sans latence réseau, et en gardant la maîtrise totale de l'infrastructure.</li>
                <li><strong>Déploiement Portfolio : Groq (Cloud)</strong><br /><em>Pourquoi ?</em> Pour la démonstration publique, j'ai basculé sur l'API <strong>Groq</strong>. Son offre gratuite généreuse et sa vitesse d'inférence vous permet de tester le RAG avec une fluidité, sans que j'aie à héberger un serveur GPU coûteux.</li>
              </ul>

              <h2 className="subsection-title">3. Base de Données Vectorielle</h2>
              <ul className="skill-list">
                <li><strong>Choix retenu : ChromaDB (Local)</strong><br /><em>Pourquoi ?</em> Simplicité de mise en place (intégré), persistance locale sans Docker lourd -&gt; prototypage rapide.</li>
              </ul>
            </div>

            <div className="section-heading-group">
              <h1 className="section-title">L'Architecture Implémentée</h1>

              <h2 className="subsection-title">1. Ingestion Intelligente (Router & Parsing)</h2>
              <p className="section-description">Le système utilise un <strong>Router</strong> pour diriger les fichiers :</p>
              <ul className="skill-list">
                <li><strong>Pipeline Vision</strong> : Traite les documents riches (tableaux, mises en page) via LlamaParse.</li>
                <li><strong>Pipeline Texte</strong> : Traite les textes simples via PyPDF pour la rapidité.</li>
              </ul>

              <h2 className="subsection-title">2. Recherche Hybride & Reranking</h2>
              <p className="section-description">Pour pallier les faiblesses de la recherche sémantique (manque de précision sur les termes techniques) :</p>
              <ol className="ordered-list">
                <li><strong>Ensemble Retriever</strong> : Combine <strong>BM25</strong> + <strong>ChromaDB</strong> (vecteurs).</li>
                <li><strong>Reranker (BGE)</strong> : Ré-ordonne les résultats pour placer les plus pertinents en premier.</li>
              </ol>

              <h2 className="subsection-title">3. Chat & Mémoire</h2>
              <ul className="skill-list">
                <li>Gestion de l'historique de conversation (Stateful) via <strong>PostgreSQL</strong> (Dockerisé).</li>
                <li>Reformulation contextuelle des questions ("C'est quoi ?" devient "C'est quoi [le sujet précédent] ?").</li>
              </ul>
            </div>

            <div className="section-heading-group">
              <h1 className="section-title">Stack Technique</h1>

              <h2 className="subsection-title">Backend & API</h2>
              <ul className="tech-list">
                <li><strong>Python 3.10+</strong> & <strong>FastAPI</strong> : Pour une API asynchrone robuste.</li>
                <li><strong>PostgreSQL</strong> : Base de données relationnelle (via Docker) pour la persistance des sessions.</li>
                <li><strong>SQLAlchemy</strong> : ORM pour l'interaction avec la BDD.</li>
              </ul>

              <h2 className="subsection-title">Intelligence Artificielle</h2>
              <ul className="tech-list">
                <li><strong>LangChain</strong> : Framework d'orchestration.</li>
                <li><strong>ChromaDB</strong> : Stockage vectoriel.</li>
                <li><strong>HuggingFace Embeddings</strong> : <code>all-MiniLM-L6-v2</code> (bon ratio performance/vitesse).</li>
                <li><strong>BAAI/bge-reranker</strong> : Pour le reranking de précision.</li>
              </ul>

              <h2 className="subsection-title">Outils</h2>
              <ul className="tech-list">
                <li><strong>Docker</strong> : Conteneurisation.</li>
                <li><strong>LlamaParse</strong> : OCR intelligent.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        body {
          background-color: #000;
          color: #f6f6f9;
          font-family: 'Segoe UI', 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
          line-height: 1.6;
        }

        .presentation-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          padding: 80px 0;
          box-sizing: border-box;
        }

        .container-content {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .main-text-area {
          padding: 20px;
          border-radius: 10px;
          background-color: rgba(10, 10, 10, 0.7);
          backdrop-filter: blur(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }

        .title-block {
          margin-bottom: 30px;
          text-align: center;
        }

        .project-title {
          font-size: 3.1em;
          font-weight: 900;
          color: #01be96;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: inline-block;
          cursor: pointer;
          text-shadow: 0 0 15px rgba(1, 190, 150, 0.6);
          transition: transform 0.2s ease-out;
        }

        .project-title:hover {
          transform: scale(1.02);
        }

        .project-tagline {
          font-size: 1.2em;
          text-align: center;
          max-width: 850px;
          margin: 0 auto 50px auto;
          color: #a0a0a0;
        }

        .section-heading-group {
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 2.3em;
          color: #01be96;
          margin-bottom: 20px;
          border-bottom: 2px solid rgba(1, 190, 150, 0.3);
          padding-bottom: 10px;
          text-align: left;
        }

        .subsection-title {
          font-size: 1.5em;
          color: #f6f6f9;
          margin-top: 24px;
          margin-bottom: 12px;
          text-align: left;
        }

        .section-description {
          font-size: 1.08em;
          color: #cccccc;
          line-height: 1.8;
          margin-bottom: 20px;
          text-align: left;
        }

        ul,
        ol {
          padding: 0;
          margin: 0;
        }

        .tech-list,
        .skill-list {
          list-style: none;
        }

        .tech-list li,
        .skill-list li,
        .ordered-list li {
          font-size: 1.05em;
          padding: 8px 0;
          color: #f6f6f9;
          position: relative;
          padding-left: 25px;
        }

        .tech-list li::before,
        .skill-list li::before,
        .ordered-list li::before {
          content: '•';
          color: #01be96;
          font-size: 1.2em;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .ordered-list {
          list-style: none;
        }

        .rag-cta-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -8px;
          margin-bottom: 28px;
        }

        .rag-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          border-radius: 999px;
          padding: 9px 16px;
          background: #01be96;
          color: #07120f;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 8px 20px rgba(1, 190, 150, 0.25), 0 0 0 1px rgba(1, 190, 150, 0.35);
        }

        .rag-cta-button:hover {
          opacity: 0.95;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(1, 190, 150, 0.3), 0 0 0 1px rgba(1, 190, 150, 0.45);
        }

        .rag-cta-button:active {
          transform: translateY(0);
        }

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

        @media (max-width: 768px) {
          .project-title {
            font-size: 2.2em;
            letter-spacing: 0.03em;
          }

          .section-title {
            font-size: 1.9em;
          }

          .subsection-title {
            font-size: 1.3em;
          }

          .project-tagline,
          .section-description,
          .tech-list li,
          .skill-list li,
          .ordered-list li {
            font-size: 1em;
          }

          .main-text-area {
            padding: 15px;
          }

          .presentation-section {
            padding: 50px 0;
          }
        }
      `}</style>
    </>
  );
}
