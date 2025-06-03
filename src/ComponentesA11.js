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

const cardStyle = {
  background: '#fff',
  padding: '20px',
  margin: '20px auto',
  maxWidth: '800px',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const titleStyle = {
  textAlign: 'center',
  color: '#2c3e50',
  marginBottom: '30px',
  fontFamily: 'Arial, sans-serif',
};

export default function ComponentesA11() {
  return (
    <div style={{ backgroundColor: '#f4f6f8', padding: '40px 10px' }}>
      <h1 style={titleStyle}>Atividade Aula 11 - Componentes Interativos</h1>

      <div style={cardStyle}><h2>Toolbar</h2><Toolbar /></div>
      <div style={cardStyle}><h2>Gallery</h2><Gallery2 /></div>
      <div style={cardStyle}><h2>Counter</h2><Counter /></div>
      <div style={cardStyle}><h2>Form</h2><Form /></div>
      <div style={cardStyle}><h2>Moving Dot</h2><MovingDot /></div>
      <div style={cardStyle}><h2>Form2</h2><Form2 /></div>
      <div style={cardStyle}><h2>Form3</h2><Form3 /></div>
      <div style={cardStyle}><h2>List</h2><List /></div>
      <div style={cardStyle}><h2>List2</h2><List2 /></div>
      <div style={cardStyle}><h2>Shape Editor</h2><ShapeEditor /></div>
      <div style={cardStyle}><h2>Counter List</h2><CounterList /></div>
      <div style={cardStyle}><h2>List3</h2><List3 /></div>
      <div style={cardStyle}><h2>List4</h2><List4 /></div>
      <div style={cardStyle}><h2>Bucket List</h2><BucketList /></div>
    </div>
  );
}