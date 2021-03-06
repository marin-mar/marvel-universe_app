/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

import useMarvelService from '../services/MarvelService';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import Button from './Button';

import './BannerCharacter.scss';

const BannerCharacter = () => {
  const [character, setCharacter] = useState({});
  const { loading, error, getAllCharacters, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateCharacter();

    // const timerId = setInterval(updateCharacter, 60000);

    // return () => {
    //   clearInterval(timerId);
    // }
  }, []);

  const onCharacterLoaded = (character) => {
    setCharacter(character);
  };

  const updateCharacter = () => {
    let charactersId = [];
    let id;

    clearError();

    getAllCharacters().then((res) => {
      res.forEach((item) => {
        if (item.thumbnail !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
          charactersId.push(item.id);
        }
      });
      id = charactersId.sort()[Math.floor(Math.random() * charactersId.length)];
      getCharacter(id).then(onCharacterLoaded);
    });
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <CharacterView {...character} /> : null;

  return (
    <div className="banner">
      <div className="col banner__random">
        <p className="banner__text">Random character for today:</p>
        <p className="banner__text">Do you want to know him better?</p>
      </div>
      <div className="col banner__main">
        <div className="banner-character">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </div>
      <div className="col banner__try">
        <p className="banner__text">Or choose another one</p>
        <div className="banner__buttons">
          <Button
            buttonClasses={'banner__button button--accent button--dark-bg'}
            buttonName="Try it"
            onClick={updateCharacter}
          />
        </div>
      </div>
    </div>
  );
};

const CharacterView = (character) => {
  let { name, description, thumbnail, homepage, wiki } = character;

  if (!name) {
    name = 'There is no name yet';
  }

  if (!description) {
    description = 'There is no description yet';
  }

  if (description.length > 200) {
    description = description.slice(0, 200) + '...';
  }

  if (!thumbnail) {
    thumbnail = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  }

  return (
    <>
      <img className="banner-character__img" src={thumbnail} alt={name} width={200} height={200} />
      <div className="banner-character__info">
        <h2 className="banner-character__name">{name}</h2>
        <p className="banner-character__description">{description}</p>
        <div className="banner-character__buttons">
          <Button
            buttonClasses={'banner-character__button button--accent'}
            buttonName="Homepage"
            buttonUrl={homepage}
          />
          <Button buttonClasses={'banner-character__button'} buttonName="Wiki" buttonUrl={wiki} />
        </div>
      </div>
    </>
  );
};

export default BannerCharacter;