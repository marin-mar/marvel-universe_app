import { useState, useEffect, useRef } from 'react';

import CharacterCard from './CharacterCard';
import Button from './Button';
import useMarvelService from '../services/MarvelService';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

import './CharacterList.scss';

const CharacterList = (props) => {
  const [charactersList, setCharactersList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [charactersEnded, setCharactersEnded] = useState(false);

  const { loading, error, getAllCharacters, getCharacter } = useMarvelService();
  const itemRefs = useRef([]);

  useEffect(() => {
    onRequestList(true);
  }, []);

  const onRequestList = (initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters().then(onCharactersLoaded);
  };

  const onCharactersLoaded = (newCharactersList) => {
    let ended = false;
    if (newCharactersList.length < offset) {
      ended = true;
    }

    setCharactersList((charactersList) => [...charactersList, ...newCharactersList]);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 3);
    setCharactersEnded((charactersEnded) => ended);
  };

  const onFocusItem = (id) => {
    itemRefs.current.forEach((item) => {
      item.childNodes[0].classList.remove('active');
    });
    itemRefs.current[id].childNodes[0].classList.add('active');
    itemRefs.current[id].focus();
  };

  const renderItems = (charactersList) => {
    let items = charactersList.slice(0, offset).map((item, i) => {
      return (
        <li
          className="character-list__item"
          key={item.id}
          tabIndex={0}
          ref={(el) => (itemRefs.current[i] = el)}
          onClick={() => {
            props.onSelectedCharacterId(item.id);
            onFocusItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              props.onSelectedCharacterId(item.id);
              onFocusItem(i);
            }
          }}>
          <CharacterCard name={item.name} thumbnail={item.thumbnail} />
        </li>
      );
    });
    return (
      <>
        <ul className="character-list">{items}</ul>
        
      </>
    );
  };

  const items = renderItems(charactersList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="col">
      {items}
      {errorMessage}
      {spinner}
      {!items ? null : (
        <Button
          buttonClasses={'character-list__button button--accent'}
          buttonName="Load more"
          disabled={newItemLoading}
          style={{ display: charactersEnded ? 'none' : 'block' }}
          onClick={onRequestList}
        />
      )}
    </div>
  );
};

export default CharacterList;