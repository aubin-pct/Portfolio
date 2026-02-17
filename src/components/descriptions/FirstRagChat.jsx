import React, { useState } from "react";

export default function FirstRagChat() {
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState([]);
  const [answer, setAnswer] = useState("");
  const [contexts, setContexts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAskQuestion = async (event) => {
    event.preventDefault();

    const cleanedQuestion = question.trim();
    if (!cleanedQuestion || isLoading) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://178.128.77.30:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: cleanedQuestion,
          history,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Erreur API (${response.status})`);
      }

      const data = await response.json();
      const nextAnswer = typeof data.answer === "string" ? data.answer : "";
      const nextContexts = Array.isArray(data.context) ? data.context : [];

      setAnswer(nextAnswer);
      setContexts(nextContexts);
      setHistory((previousHistory) => [
        ...previousHistory,
        { role: "user", content: cleanedQuestion },
        { role: "assistant", content: nextAnswer },
      ]);
      setQuestion("");
    } catch (error) {
      setErrorMessage(error?.message || "Une erreur est survenue lors de l'appel API.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetConversation = () => {
    setQuestion("");
    setHistory([]);
    setAnswer("");
    setContexts([]);
    setErrorMessage("");
  };

  return (
    <section className="rag-page">
      <div className="rag-shell">
        <header className="rag-header">
          <h1>Chat RAG</h1>
          <a href="/Portfolio/descriptionProjet?page=FirstRagProject">← Retour au projet</a>
        </header>

        <div className="rag-notice" role="status" aria-live="polite">
          <p><strong>Source :</strong> cette démo porte sur le <strong>Code du travail</strong>.</p>
          <p><strong>Temps de réponse :</strong> comptez environ <strong>2 minutes</strong>, le serveur est peu performant.</p>
        </div>

        <form className="rag-form" onSubmit={handleAskQuestion}>
          <label htmlFor="rag-question">Votre question</label>
          <textarea
            id="rag-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Posez votre question..."
            rows={4}
            required
          />

          <div className="rag-actions">
            <button type="submit" disabled={isLoading || question.trim() === ""}>
              {isLoading ? "Envoi..." : "Envoyer"}
            </button>
            <button type="button" className="secondary" onClick={handleResetConversation}>
              Réinitialiser
            </button>
          </div>
        </form>

        {errorMessage && <p className="rag-error">{errorMessage}</p>}

        <p className="rag-meta">Historique: {history.length} messages</p>

        {history.length > 0 && (
          <div className="rag-block">
            <h2>Conversation</h2>
            <div className="rag-history-list">
              {history.map((message, index) => (
                <article key={`${message.role}-${index}`} className={`rag-bubble ${message.role}`}>
                  <span>{message.role}</span>
                  <p>{message.content}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {answer && (
          <div className="rag-block">
            <h2>Réponse</h2>
            <p className="rag-answer">{answer}</p>
          </div>
        )}

        {contexts.length > 0 && (
          <div className="rag-block">
            <h2>Contexte récupéré</h2>
            <div className="rag-context-list">
              {contexts.map((contextText, index) => (
                <article key={`context-${index}`} className="rag-context-item">
                  <h3>Document {index + 1}</h3>
                  <p>{contextText}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .rag-page {
          min-height: 100vh;
          background: #000;
          color: #f6f6f9;
          padding: 40px 16px 70px;
        }

        .rag-shell {
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
          border: 1px solid #2f3040;
          border-radius: 12px;
          background: #111117;
          padding: 20px;
        }

        .rag-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .rag-header h1 {
          margin: 0;
          color: #01be96;
          font-size: 1.6rem;
        }

        .rag-header a {
          color: #f6f6f9;
          text-decoration: none;
          font-weight: 600;
        }

        .rag-header a:hover {
          color: #01be96;
        }

        .rag-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .rag-notice {
          border: 1px solid rgba(1, 190, 150, 0.35);
          border-radius: 10px;
          background: rgba(1, 190, 150, 0.08);
          padding: 10px 12px;
          margin-bottom: 14px;
        }

        .rag-notice p {
          margin: 0;
          color: #dce8e6;
          line-height: 1.5;
        }

        .rag-notice p + p {
          margin-top: 4px;
        }

        .rag-form label {
          color: #cfcfd4;
          font-weight: 600;
        }

        .rag-form textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #2f3040;
          border-radius: 8px;
          background: #0d0d13;
          color: #f6f6f9;
          padding: 12px;
          resize: vertical;
          min-height: 100px;
        }

        .rag-form textarea:focus {
          outline: none;
          border-color: #01be96;
        }

        .rag-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .rag-actions button {
          border: none;
          border-radius: 8px;
          padding: 10px 14px;
          background: #01be96;
          color: #07120f;
          font-weight: 700;
          cursor: pointer;
        }

        .rag-actions button.secondary {
          background: #2f3040;
          color: #f6f6f9;
        }

        .rag-actions button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .rag-error {
          color: #ff8f8f;
          margin: 14px 0 0;
        }

        .rag-meta {
          color: #9fa3b4;
          font-size: 0.92rem;
          margin: 12px 0 0;
        }

        .rag-block {
          margin-top: 18px;
          border-top: 1px solid #2f3040;
          padding-top: 14px;
        }

        .rag-block h2 {
          margin: 0 0 10px;
          color: #01be96;
          font-size: 1.1rem;
        }

        .rag-history-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .rag-bubble {
          border: 1px solid #2f3040;
          border-radius: 10px;
          padding: 10px 12px;
          background: #171823;
        }

        .rag-bubble.user {
          border-color: rgba(1, 190, 150, 0.45);
        }

        .rag-bubble span {
          text-transform: uppercase;
          font-size: 0.72rem;
          color: #9fa3b4;
          font-weight: 700;
        }

        .rag-bubble p,
        .rag-answer,
        .rag-context-item p {
          margin: 6px 0 0;
          white-space: pre-wrap;
        }

        .rag-context-list {
          display: grid;
          gap: 8px;
        }

        .rag-context-item {
          border: 1px solid #2f3040;
          border-radius: 8px;
          background: #16161e;
          padding: 10px 12px;
        }

        .rag-context-item h3 {
          margin: 0;
          color: #01be96;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
