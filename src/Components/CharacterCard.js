import './CharacterCard.scss';

const CharacterCard = (props) => {
  let { cardClass, name, thumbnail } = props;

  if (cardClass) {
    cardClass += ' character-card';
  } else {
    cardClass = 'character-card';
  }

  return (
    <div className={cardClass}>
      <img
        src={thumbnail}
        alt="character card img"
        className="character-card__img"
        width={200}
        height={200}
      />
      <span className="character-card__spacer"></span>
      <h3 className="character-card__title">{name}</h3>
    </div>
  );
};

export default CharacterCard;
