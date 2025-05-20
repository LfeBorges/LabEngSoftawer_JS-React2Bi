export default function TeaGathering({ cupsRequested }) {
    const cups = [];
    for (let i = 0; i < cupsRequested; i++) {
      cups.push(<li key={i}>Cup {i + 1}</li>);
    }
    return <ul>{cups}</ul>;
  }
  