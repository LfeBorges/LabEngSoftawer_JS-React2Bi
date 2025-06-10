export default function ContactList({ contacts, selectedId, onSelect }) {
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              onClick={() => onSelect(contact.email)}
              style={{ fontWeight: contact.email === selectedId ? "bold" : "normal" }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    );
  }
  