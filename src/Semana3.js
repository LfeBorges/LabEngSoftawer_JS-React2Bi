import React from 'react';
import Contador from './Componentes/Contador';

export default function Semana3() {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h1>Contador de Pessoas</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Contador/>
      </div>
    </div>
  );
}