import Button from './Button';
import characterCardImg from '../Img/character_card.png';

import './CharacterDescription.scss';

const CharacterDescription = (props) => {
  return (
    <div className="character-description">
      <div className="row">
        <img
          className="character-description__img"
          src={characterCardImg}
          alt="character-card__img"
          width={200 + 'px'}
          height={200 + 'px'}
        />
        <div className="col">
          <h2 className="character-description__name">LOKI</h2>
          <div className="character-description__buttons">
            <Button buttonClasses={'character-description__button button--accent'} buttonName="Homepage" />
            <Button buttonClasses={'character-description__button'} buttonName="Wiki" />
          </div>
        </div>
      </div>
      <div className="row">
        <p className="character-description__text">
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother
          of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world
          serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the
          father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is
          referred to as the father of Váli in the Prose Edda.
        </p>
      </div>
      <div className="col">
        <h3 className="character-description__comics">Comics:</h3>
        <ul className="character-description__comics-list">
          <li className="character-description__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
          <li className="character-description__comics-item">Alpha Flight (1983) #50</li>
          <li className="character-description__comics-item">Amazing Spider-Man (1999) #503</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDescription;
