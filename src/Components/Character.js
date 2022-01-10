import { Link } from 'react-router-dom';
import './Character.scss';

const Character = ({ data }) => {
  const { name, description, thumbnail } = data;

  return (
    <div className="character">
      <img className="character__img" src={thumbnail} alt={name} width={293} height={293} />

      <div className="character__info">
        <h2 className="character__title">{name}</h2>
        <p className="character__text">{description}</p>
      </div>

      <Link to={'/'} className="character__back">
        Back to all
      </Link>
    </div>
  );
};

export default Character;
