import Item from './Item';

export default function PackingList() {
  const items = [
    { id: 1, name: 'Toothbrush', isPacked: true },
    { id: 2, name: 'Socks', isPacked: false },
  ];
  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
