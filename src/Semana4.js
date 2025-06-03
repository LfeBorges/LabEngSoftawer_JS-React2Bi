import React from 'react';
import { Link } from 'react-router-dom';
import ComponentesA11 from './ComponentesA11';

export default function Semana4() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Semana 04 - Aula 11 (Componentes Interativos)</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/">Retornar à página inicial</Link>
      </div>
      <ComponentesA11 />
    </div>
  );
}