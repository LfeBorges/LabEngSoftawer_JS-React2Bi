import { useState } from "react";
import Voltar from "./Voltar";
import "./formQuiz.css";

export default function FormQuiz() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return (
      <>
        <h1>Está correto!</h1>
        <Voltar caminho="/semana5" />
      </>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2 className="titulo-quiz">Quiz de React</h2>
      <p className="pergunta">
        Em React, qual o nome do evento que detecta cliques do mouse em um componente?
      </p>
      <form className="quiz-react" onSubmit={handleSubmit}>
        <textarea
          className="resposta-quiz"
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <button className="enviar-resposta" disabled={answer.length === 0 || status === 'submitting'}>
          Responder
        </button>
        {error && <p className="Error">{error.message}</p>}
      </form>
      <Voltar caminho="/semana5" />
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "onclick") {
        resolve();
      } else {
        reject(new Error("Tente novamente!"));
      }
    }, 1500);
  });
}
