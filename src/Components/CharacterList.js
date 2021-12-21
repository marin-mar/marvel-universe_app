import { Component } from 'react';

import CharacterCard from './CharacterCard';
import Button from './Button';
import MarvelService from '../services/MarvelService';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

import './CharacterList.scss';

class CharacterList extends Component {
  state = {
    charactersList: [],
    loading: true,
    error: false,
  };
  marvelService = new MarvelService();

  componentDidMount() {
    this.loadCharactersList();
  }

  onCharactersLoaded = (charactersList) => {
    this.setState({
      charactersList,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  loadCharactersList() {
    let tempArr = [];
    let countItems = 0;
    this.marvelService
      .getAllCharacters()
      .then((res) => {
        res.forEach((item) => {
          if (
            item.thumbnail !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' &&
            countItems < 9
          ) {
            tempArr.push(item);
            countItems += 1;
          }
        });
        return tempArr;
      })
      .then(this.onCharactersLoaded)
      .catch(this.onError);
  }

  renderItems(charactersList) {
    let items = charactersList.map((item) => {
      return (
        <li className="character-list__item" key={item.id}>
          <CharacterCard name={item.name} thumbnail={item.thumbnail} />
        </li>
      );
    });
    return <ul className="character-list">{items}</ul>;
  }

  render() {
    const { charactersList, loading, error } = this.state;
    const items = this.renderItems(charactersList);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="col">
        {errorMessage}
        {spinner}
        {content}
        <Button buttonClasses={'character-list__button button--accent'} buttonName="Load more" />
      </div>
    );
  }
}

export default CharacterList;
