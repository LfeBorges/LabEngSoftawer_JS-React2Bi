export default function Avatar({ person, size = 100 }) {
    return (
      <img
        src={person.avatarUrl}
        alt={person.name}
        style={{ width: size, height: size, borderRadius: '50%' }}
      />
    );
  }