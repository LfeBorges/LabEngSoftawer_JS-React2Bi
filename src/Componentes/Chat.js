export default function Chat({ contact }) {
    return (
      <div className="chat-box">
        <textarea
          className="chat-textarea"
          placeholder={`Chat to ${contact.name}`}
        />
        <br />
        <button className="chat-button">
          Send to {contact.email}
        </button>
      </div>
    );
  }