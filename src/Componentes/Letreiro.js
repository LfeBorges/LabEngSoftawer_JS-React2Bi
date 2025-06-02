import React, { useState, useEffect } from 'react';

function Letreiro({ text, speed = 150 }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(text.slice(0, index + 1));
      setIndex(prev => (prev + 1) % (text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <div style={{ fontSize: '1.5rem', fontFamily: 'monospace' }}>
      {displayText}
      <span style={{ display: 'inline-block', width: '1ch', animation: 'blink 1s step-end infinite' }}>|</span>
    </div>
  );
}

export default Letreiro;