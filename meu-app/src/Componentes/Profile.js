import Avatar from './Avatar';

export default function Profile() {
  const person = { 
    name: 'Hedy Lamarr', 
    avatarUrl: 'https://i.imgur.com/7vQD0fPs.jpg' 
  };
  return <Avatar person={person} />;
}