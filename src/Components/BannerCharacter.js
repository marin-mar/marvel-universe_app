import { Component } from 'react';

import Button from './Button';
import MarvelService from '../services/MarvelService';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

import bannerRandomImg from '../Img/banner-random.png';
import './BannerRandom.scss';
import './BannerCharacter.scss';

class BannerCharacter extends Component {
  state = {
    character: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    // const timerId = setInterval(this.updateCharacter, 5000);
    this.updateCharacter();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  onCharacterLoaded = (character) => {
    this.setState({
      character,
      loading: false,
    });
  };

  updateCharacter = () => {
    let charactersId = [];
    let id;
    this.marvelService
      .getAllCharacters()
      .then((res) => {
        res.forEach((item) => {
          if (
            item.thumbnail &&
            item.thumbnail !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          ) {
            charactersId.push(item.id);
          }
        });
        id = charactersId.sort()[Math.floor(Math.random() * charactersId.length)];
        this.marvelService.getCharacter(id).then(this.onCharacterLoaded);
      })
      .catch(this.onError);
  };

  render() {
    let { character, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <ViewCharacter character={character} /> : null;

    return (
      <div className="row">
        <div className="banner banner--character">
          {errorMessage}
          {spinner}
          {content}
        </div>
        <BannerRandom onClick={this.updateCharacter} />
      </div>
    );
  }
}

const ViewCharacter = (character) => {
  let {
    character: { name, description, thumbnail, homepage, wiki },
  } = character;

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
      <img className="banner__img" src={thumbnail} alt={name} width={200} height={200} />
      <div className="banner__info">
        <h2 className="banner__name">{name}</h2>
        <p className="banner__description">{description}</p>
        <div className="banner__buttons">
          <Button buttonClasses={'banner__button button--accent'} buttonName="Homepage" buttonUrl={homepage} />
          <Button buttonClasses={'banner__button'} buttonName="Wiki" buttonUrl={wiki} />
        </div>
      </div>
    </>
  );
};

const BannerRandom = (props) => {
  const { updateCharacter } = props;
  return (
    <div className="banner banner--random">
      <div className="banner__info">
        <h2 className="banner__text">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </h2>
        <p className="banner__text">Or choose another one</p>
        <div className="banner__buttons">
          <Button
            buttonClasses={'banner__button button--accent button--dark-bg'}
            buttonName="Try it"
            onClick={updateCharacter}
          />
        </div>
      </div>
      <img className="banner__img" src={bannerRandomImg} alt="hammer and shield" width={202} height={189} />
    </div>
  );
};

export default BannerCharacter;
