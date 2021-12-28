import { Link } from 'react-router-dom';
import './ComicsSingle.scss';

const ComicsSingle = ({ comic }) => {
  const { title, thumbnail, description, pageCount, language, price } = comic;

  return (
    <div className="comic">
      <img className="comic__img" src={thumbnail} alt={title} width={293} height={450} />

      <div className="comic__info">
        <h2 className="comic__title">{title}</h2>
        <p className="comic__text">{description}</p>
        <p className="comic__pages">{pageCount}</p>
        <p className="comic__language">{language}</p>
        <p className="comic__price">{price}</p>
      </div>

      <Link to={"/comics"} className="comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default ComicsSingle;
