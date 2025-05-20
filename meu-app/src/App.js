import React from 'react';
import './App.css';
import Relogio from './Componentes/Relogio';
import Letreiro from './Componentes/Letreiro';
import Contador from './Componentes/Contador';
import Gallery from './Componentes/Gallery';
import Profile from './Componentes/Profile';

export default function App() {
  return (
    <div className="App">
      
      {/* Exemplo 1: Relógio */}
      <section style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1>Relógio</h1>
        <Relogio />
      </section>

      {/* Exemplo 2: Letreiro */}
      <section style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1>Letreiro</h1>
        <Letreiro text="Conheça a Fatec" speed={200} />
      </section>

      {/* Exemplo 3: Contadores */}
      <section style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1>Contador de Pessoas</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Contador titulo="Entrada" />
          <Contador titulo="Saída" />
        </div>
      </section>

      {/* Exemplo 4: Gallery e Profile */}
      <section style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1>Galeria de Perfis</h1>
        <Gallery />
        <h2>Perfil único abaixo:</h2>
        <Profile />
      </section>

    </div>
  );
}