import React from 'react';
import { useNavigate } from 'react-router-dom';

const Voltar = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      Voltar
    </button>
  );
};

export default Voltar;
