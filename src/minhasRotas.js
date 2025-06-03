import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Semana1 from "./Semana1";
import Semana2 from "./Semana2";
import Semana3 from "./Semana3";
import Semana4 from './Semana4';
import Relogio from "./Componentes/Relogio";
import Letreiro from "./Componentes/Letreiro";

export default function MinhasRotas() {
  return (
    <BrowserRouter>
      <div style={{ background: '#eee', padding: '1rem' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>Início</Link>
        <Link to="/semana1" style={{ margin: '0 1rem' }}>Semana 01</Link>
        <Link to="/semana2" style={{ margin: '0 1rem' }}>Semana 02</Link>
        <Link to="/semana3" style={{ margin: '0 1rem' }}>Semana 03</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semana1" element={<Semana1 />} />
        <Route path="/semana1/atividade1" element={<Relogio />} />
        <Route path="/semana1/atividade2" element={<Letreiro text="Conheça a Fatec" speed={150} />} />
        <Route path="/semana2" element={<Semana2 />} />
        <Route path="/semana3" element={<Semana3 />} />
        <Route path="/semana4" element={<Semana4 />} />
      </Routes>
    </BrowserRouter>
  );
}