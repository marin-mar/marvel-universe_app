import React from 'react';

import CharacterCard from './CharacterCard';
import Button from './Button';
import MarvelService from '../services/MarvelService';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

import './CharacterList.scss';

class CharacterList extends React.Component {
  state = {
    charactersList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 3,
    charactersEnded: false,
  };
  marvelService = new MarvelService();
  itemRefs = [];

  componentDidMount() {
    this.onRequestList();
  }

  onListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  onCharactersLoaded = (newCharactersList) => {
    let ended = false;
    if (newCharactersList.length < this.state.offset) {
      ended = true;
    }

    this.setState(({ offset, charactersList }) => ({
      charactersList: [...charactersList, ...newCharactersList],
      loading: false,
      newItemLoading: false,
      offset: offset + 3,
      charactersEnded: ended,
    }));
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  onRequestList = (offset) => {
    this.onListLoading();

    this.marvelService.getAllCharacters(offset).then(this.onCharactersLoaded).catch(this.onError);
  };

  setItemRef = (ref) => {
    this.itemRefs.push(ref);
  };

  onFocusItem = (id) => {
    this.itemRefs.forEach((item) => {
      item.childNodes[0].classList.remove('active');
    });
    this.itemRefs[id].childNodes[0].classList.add('active');
    this.itemRefs[id].focus();
  };

  renderItems(charactersList) {
    let items = charactersList.slice(0, this.state.offset).map((item, i) => {
      return (
        <li
          className="character-list__item"
          key={item.id}
          tabIndex={0}
          ref={this.setItemRef}
          onClick={() => {
            this.props.onSelectedCharacterId(item.id);
            this.onFocusItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              this.props.onSelectedCharacterId(item.id);
              this.onFocusItem(i);
            }
          }}>
          <CharacterCard name={item.name} thumbnail={item.thumbnail} />
        </li>
      );
    });
    return <ul className="character-list">{items}</ul>;
  }

  render() {
    const { charactersList, loading, error, newItemLoading, offset, charactersEnded } = this.state;
    const items = this.renderItems(charactersList);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="col">
        {errorMessage}
        {spinner}
        {content}
        {!content ? null : (
          <Button
            buttonClasses={'character-list__button button--accent'}
            buttonName="Load more"
            disabled={newItemLoading}
            style={{ display: charactersEnded ? 'none' : 'block' }}
            onClick={() => this.onRequestList(offset)}
          />
        )}
      </div>
    );
  }
}

export default CharacterList;
