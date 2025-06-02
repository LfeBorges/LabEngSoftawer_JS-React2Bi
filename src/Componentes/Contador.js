import React, { useState } from 'react';

export default function ContadorHomemMulher() {
  const [homem, setHomem] = useState(0);
  const [mulher, setMulher] = useState(0);

  const soma = homem + mulher;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        {/* Contador Homem */}
        <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '10px' }}>
          <h2>Homem</h2>
          <p style={{ fontSize: '2rem' }}>{homem}</p>
          <button onClick={() => setHomem(homem + 1)}>+</button>
          <button onClick={() => homem > 0 && setHomem(homem - 1)}>-</button>
        </div>

        {/* Contador Mulher */}
        <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '10px' }}>
          <h2>Mulher</h2>
          <p style={{ fontSize: '2rem' }}>{mulher}</p>
          <button onClick={() => setMulher(mulher + 1)}>+</button>
          <button onClick={() => mulher > 0 && setMulher(mulher - 1)}>-</button>
        </div>
      </div>

      <h2 style={{ marginTop: '2rem' }}>Total: {soma}</h2>
    </div>
  );
}