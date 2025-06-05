import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Componentes/Gallery';
import PackingList from './Componentes/PackingList';
import Avatar from './Componentes/Avatar';

export default function Semana2() {
  return (
    <div>
      <h1>Semana 02 - Componentes React</h1>

      <h2>Exemplo 1: Galeria de Cientistas</h2>
      <Gallery />

      <h2>Exemplo 2: Lista com Renderização Condicional</h2>
      <PackingList />

      <h2>Exemplo 3: Avatar</h2>
      <Avatar person={{ name: "Ada Lovelace", avatarUrl: "https://i.imgur.com/7vQD0fPs.jpg" }} />

    </div>
  );
}
