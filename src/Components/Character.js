import { Link } from 'react-router-dom';
import './Character.scss';

const Character = ({ data }) => {
  const { name, description, thumbnail, comics } = data;

  return (
    <div className="character">
      <img className="character__img" src={thumbnail} alt={name} width={293} height={293} />

      <div className="character__info">
        <h2 className="character__title">{name}</h2>
        <p className="character__text">{description}</p>
        <h3 className="character__comics">Comics:</h3>
        <ul className="character__comics-list">
          {comics.length > 0 ? null : 'There is no comics with this character'}
          {comics.map((item, i) => {
            return (
              <li className="character__comics-item" key={i}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>

      <Link to={'/'} className="character__back">
        Back to all
      </Link>
    </div>
  );
};

export default Character;
