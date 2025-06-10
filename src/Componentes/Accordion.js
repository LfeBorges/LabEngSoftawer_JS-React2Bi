import { useState } from "react";

function Panel({ title, children, isActive, onShow }) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Mostrar</button>
      )}
    </section>
  );
}

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>FAQ - Accordion</h2>
      <Panel
        title="O que é React?"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        React é uma biblioteca JavaScript para construir interfaces de usuário.
      </Panel>
      <Panel
        title="Por que usar React?"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        React permite criar aplicações de forma declarativa, eficiente e flexível.
      </Panel>
    </>
  );
}