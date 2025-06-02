export function Profile({ name, image, profession }) {
  return (
    <div className="profile">
      <img src={image} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{profession}</p>
    </div>
  );
}