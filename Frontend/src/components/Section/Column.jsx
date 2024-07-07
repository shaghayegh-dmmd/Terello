
import Card from './Card';

const Column = ({ name, cards, onDrop }) => {
  return (
    <div className="column">
      <h2>{name}</h2>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Column;