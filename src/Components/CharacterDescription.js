/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import Button from './Button';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import Skeleton from './Skeleton';
import useMarvelService from '../services/MarvelService';
import usePrevious from '../hooks/usePrevious.hook';

import './CharacterDescription.scss';

const CharacterDescription = (props) => {
  const [character, setCharacter] = useState(null);

  const { loading, error, getCharacter, clearError } = useMarvelService();

  const onCharacterLoaded = (character) => {
    setCharacter(character);
  };

  const updateCharacter = () => {
    if (!props.selectedCharacterId) {
      return;
    }
    clearError();
    getCharacter(props.selectedCharacterId).then(onCharacterLoaded);
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  const prevSelectedCharacterId = usePrevious(props.selectedCharacterId);

  useEffect(() => {
    if (props.selectedCharacterId !== prevSelectedCharacterId) {
      updateCharacter();
    }
    updateCharacter();
  }, [props.selectedCharacterId]);


  const skeleton = character || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !character) ? <CharacterView character={character} /> : null;

  return (
    <div className="character-description">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const CharacterView = ({ character }) => {
  let { name, description, thumbnail, homepage, wiki, comics } = character;
  comics = comics.length > 9 ? comics.slice(0, 10) : comics;

  if (description.length > 200) {
    description = description.slice(0, 200) + '...';
  }

  return (
    <>
      <div className="row">
        <img className="character-description__img" src={thumbnail} alt={name} width={200} height={200} />
        <div className="col">
          <h2 className="character-description__name">{name}</h2>
          <div className="character-description__buttons">
            <Button
              buttonClasses={'character-description__button button--accent'}
              buttonName="Homepage"
              buttonUrl={homepage}
            />
            <Button buttonClasses={'character-description__button'} buttonName="Wiki" buttonUrl={wiki} />
          </div>
        </div>
      </div>
      <div className="row">
        <p className="character-description__text">{description}</p>
      </div>
      <div className="col">
        <h3 className="character-description__comics">Comics:</h3>
        <ul className="character-description__comics-list">
          {comics.length > 0 ? null : 'There is no comics with this character'}
          {comics.map((item, i) => {
            return (
              <li className="character-description__comics-item" key={i}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CharacterDescription;
