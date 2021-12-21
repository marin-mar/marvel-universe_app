import characterCardImg from '../Img/character_card.png';

import './CharacterCard.scss';

const CharacterCard = (props) => {
  let { cardClass, name, thumbnail } = props;

  if (cardClass) {
    cardClass += ' character-card';
  } else {
    cardClass = 'character-card';
  }

  if (!name) {
    name = 'Character';
  }

  if (!thumbnail) {
    thumbnail = { characterCardImg };
  }

  return (
    <div className={cardClass}>
      <img
        src={thumbnail}
        alt="character card img"
        className="character-card__img"
        width={200 + 'px'}
        height={200 + 'px'}
      />
      <h3 className="character-card__title">{name}</h3>
    </div>
  );
};

export default CharacterCard;
