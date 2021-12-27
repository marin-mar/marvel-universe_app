import CharacterImg from '../Img/Character.png';

import './Character.scss';

const Character = () => {
  return (
    <div className="character">
      <img className="character__img" src={CharacterImg} alt="Single character" width={293} height={293} />

      <div className="character__info">
        <h2 className="character__title">LOKI</h2>
        <p className="character__text">
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother
          of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world
          serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the
          father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is
          referred to as the father of Váli in the Prose Edda.
        </p>
      </div>

      <p className="character__back">Back to all</p>
    </div>
  );
};

export default Character;
