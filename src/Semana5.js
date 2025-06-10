import { Link } from "react-router-dom";
import Voltar from "./Componentes/Voltar";

export default function Semana5() {
  return (
    <>
      <h2>Atividade da Semana 5</h2>
      <nav>
        <ul>
          <li>
            <Link to="/semana5/formQuiz">Quiz Interativo</Link>
          </li>
        </ul>
      </nav>
      <Voltar caminho="/" />
    </>
  );
}
