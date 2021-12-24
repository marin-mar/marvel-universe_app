import { useState, useEffect, useRef } from 'react';

import Button from './Button';
import MarvelService from '../services/MarvelService';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import Skeleton from './Skeleton';

import './CharacterDescription.scss';

const CharacterDescription = (props) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const onCharacterLoading = () => {
    setLoading(true);
  };

  const onCharacterLoaded = (character) => {
    setCharacter(character);
    setLoading(false);
  };

  const updateCharacter = () => {
    if (!props.selectedCharacterId) {
      return;
    }

    onCharacterLoading();

    marvelService.getCharacter(props.selectedCharacterId).then(onCharacterLoaded).catch(onError);
  };

  useEffect(() => {
    updateCharacter();
  }, []);

  const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
  };

  const prevSelectedCharacterId = usePrevious(props.selectedCharacterId);

  useEffect(() => {
    if (props.selectedCharacterId !== prevSelectedCharacterId) {
      updateCharacter();
    }
    updateCharacter();
  }, [props.selectedCharacterId]);

  //   componentDidUpdate(prevProps) {
  //     if (this.props.selectedCharacterId !== prevProps.selectedCharacterId) {
  //       this.updateCharacter();
  //     }
  //   }

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

// import { Component } from 'react';

// import Button from './Button';
// import MarvelService from '../services/MarvelService';
// import Spinner from './Spinner';
// import ErrorMessage from './ErrorMessage';
// import Skeleton from './Skeleton';

// import './CharacterDescription.scss';

// class CharacterDescription extends Component {
//   state = {
//     character: null,
//     loading: false,
//     error: false,
//   };

//   marvelService = new MarvelService();

//   onError = () => {
//     this.setState({
//       loading: false,
//       error: true,
//     });
//   };

//   onCharacterLoading = () => {
//     this.setState({
//       loading: true,
//     });
//   };

//   onCharacterLoaded = (character) => {
//     this.setState({
//       character,
//       loading: false,
//     });
//   };

//   updateCharacter = () => {
//     const { selectedCharacterId } = this.props;
//     if (!selectedCharacterId) {
//       return;
//     }

//     this.onCharacterLoading();

//     this.marvelService.getCharacter(selectedCharacterId).then(this.onCharacterLoaded).catch(this.onError);
//   };

//   componentDidMount() {
//     this.updateCharacter();
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.selectedCharacterId !== prevProps.selectedCharacterId) {
//       this.updateCharacter();
//     }
//   }

//   render() {
//     const { character, loading, error } = this.state;

//     const skeleton = character || loading || error ? null : <Skeleton />;
//     const errorMessage = error ? <ErrorMessage /> : null;
//     const spinner = loading ? <Spinner /> : null;
//     const content = !(loading || error || !character) ? <CharacterView character={character} /> : null;

//     return (
//       <div className="character-description">
//         {skeleton}
//         {errorMessage}
//         {spinner}
//         {content}
//       </div>
//     );
//   }
// }

// const CharacterView = ({ character }) => {
//   let { name, description, thumbnail, homepage, wiki, comics } = character;
//   comics = comics.length > 9 ? comics.slice(0, 10) : comics;

//   if (!name) {
//     name = 'There is no name yet';
//   }

//   if (!description) {
//     description = 'There is no description yet';
//   }

//   if (description.length > 200) {
//     description = description.slice(0, 200) + '...';
//   }

//   if (!thumbnail) {
//     thumbnail = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
//   }

//   return (
//     <>
//       <div className="row">
//         <img className="character-description__img" src={thumbnail} alt={name} width={200} height={200} />
//         <div className="col">
//           <h2 className="character-description__name">{name}</h2>
//           <div className="character-description__buttons">
//             <Button
//               buttonClasses={'character-description__button button--accent'}
//               buttonName="Homepage"
//               buttonUrl={homepage}
//             />
//             <Button buttonClasses={'character-description__button'} buttonName="Wiki" buttonUrl={wiki} />
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <p className="character-description__text">{description}</p>
//       </div>
//       <div className="col">
//         <h3 className="character-description__comics">Comics:</h3>
//         <ul className="character-description__comics-list">
//           {comics.length > 0 ? null : 'There is no comics with this character'}
//           {comics.map((item, i) => {
//             return (
//               <li className="character-description__comics-item" key={i}>
//                 {item.name}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default CharacterDescription;
