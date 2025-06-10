export default function Chat({ contact }) {
    return (
      <section>
        <h2>Chat com {contact.name}</h2>
        <p>Enviar mensagem para: {contact.email}</p>
      </section>
    );
  }