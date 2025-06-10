import { useState } from "react";
import { Link } from "react-router-dom";
import FormQuiz from "./Componentes/formQuiz";
import FormTicket from "./Componentes/FormTicket";
import Accordion from "./Componentes/Accordion";
import ContactList from "./Componentes/ContactList";
import Chat from "./Componentes/Chat";
import Voltar from "./Componentes/Voltar";

const contacts = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Carol", email: "carol@example.com" },
];

export default function Semana5() {
  const [selectedId, setSelectedId] = useState(contacts[0].email);
  const contact = contacts.find(c => c.email === selectedId);

  return (
    <div>
      <h1>Atividades da Semana 5</h1>
      <h2>1. FormQuiz</h2>
      <FormQuiz />

      <h2>2. FormTicket</h2>
      <FormTicket />

      <h2>3. Accordion</h2>
      <Accordion />

      <h2>4. Chat com Lista de Contatos</h2>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <Chat contact={contact} />

      <Voltar caminho="/" />
    </div>
  );
}
