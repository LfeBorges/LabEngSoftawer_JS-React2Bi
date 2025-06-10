import { useState } from "react";
import Voltar from "./Voltar";

export default function FormTicket() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return (
      <>
        <h1>Ticket enviado com sucesso!</h1>
        <Voltar caminho="/semana5" />
      </>
    );
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setIsSent(true);
    }}>
      <textarea
        placeholder="Descreva o problema"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Enviar</button>
      <Voltar caminho="/semana5" />
    </form>
  );
}