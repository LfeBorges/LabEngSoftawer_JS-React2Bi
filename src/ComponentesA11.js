import React from 'react';
import Toolbar from './Componentes/Toolbar';
import Gallery2 from './Componentes/Gallery2';
import Counter from './Componentes/Counter';
import Form from './Componentes/Form';
import MovingDot from './Componentes/MovingDot';
import Form2 from './Componentes/Form2';
import Form3 from './Componentes/Form3';
import List from './Componentes/List';
import List2 from './Componentes/List2';
import ShapeEditor from './Componentes/ShapeEditor';
import CounterList from './Componentes/CounterList';
import List3 from './Componentes/List3';
import List4 from './Componentes/List4';
import BucketList from './Componentes/BucketList';

export default function ComponentesA11() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Atividade Aula 11 - Componentes Interativos</h1>

      <section><h2>Toolbar</h2><Toolbar /></section>
      <section><h2>Gallery</h2><Gallery2 /></section>
      <section><h2>Counter</h2><Counter /></section>
      <section><h2>Form</h2><Form /></section>
      <section><h2>Moving Dot</h2><MovingDot /></section>
      <section><h2>Form2</h2><Form2 /></section>
      <section><h2>Form3</h2><Form3 /></section>
      <section><h2>List</h2><List /></section>
      <section><h2>List2</h2><List2 /></section>
      <section><h2>Shape Editor</h2><ShapeEditor /></section>
      <section><h2>Counter List</h2><CounterList /></section>
      <section><h2>List3</h2><List3 /></section>
      <section><h2>List4</h2><List4 /></section>
      <section><h2>Bucket List</h2><BucketList /></section>
    </div>
  );
}
