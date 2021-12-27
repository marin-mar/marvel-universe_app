import Button from './Button';
import './CharacterSearch.scss';

const CharacterSearch = () => {
    return (
      <div className="search">
        <h2 className="search__title">Or find a character by name:</h2>
        <div className="search__form">
          <input className="search__input" type="text" placeholder="Enter name" />
          <Button buttonClasses={'search__button button--accent'} buttonName="Find" />
        </div>
        <div className="search__message">
          <div className="search__message--required">
            <h3 className="search__text">This field is required</h3>
          </div>
          <div className="search__message--success">
            <h3 className="search__text">There is! Visit ___ page?</h3>
            <Button buttonClasses={'search__button button--medium'} buttonName="To page" />
          </div>
          <div className="search__message--error">
            <h3 className="search__text">The character was not found. Check the name and try again</h3>
          </div>
        </div>
      </div>
    );
};

export default CharacterSearch;
