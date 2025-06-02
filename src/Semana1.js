import React from 'react';
import { Link } from 'react-router-dom';

export default function Semana1() {
  return (
    <div>
      <h1>Semana 01</h1>
      <ul>
        <li><Link to="/semana1/atividade1">Atividade 1 - Relógio</Link></li>
        <li><Link to="/semana1/atividade2">Atividade 2 - Letreiro</Link></li>
      </ul>
      <br />
      <Link to="/">Retornar à página inicial</Link>
    </div>
  );
}