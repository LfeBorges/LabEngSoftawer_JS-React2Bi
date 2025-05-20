import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
      {hora.toLocaleTimeString()}
    </div>
  );
}

export default Relogio;