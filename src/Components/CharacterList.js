import { useState, useEffect, useRef } from 'react';

import CharacterCard from './CharacterCard';
import Button from './Button';
import MarvelService from '../services/MarvelService';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

import './CharacterList.scss';

const CharacterList = (props) => {
  const [charactersList, setCharactersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [charactersEnded, setCharactersEnded] = useState(false);

  const marvelService = new MarvelService();
  const itemRefs = useRef([]);

  useEffect(() => {
    onRequestList();
  }, []);

  const onListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharactersLoaded = (newCharactersList) => {
    let ended = false;
    if (newCharactersList.length < offset) {
      ended = true;
    }

    setCharactersList((charactersList) => [...charactersList, ...newCharactersList]);
    setLoading((loading) => false);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 3);
    setCharactersEnded((charactersEnded) => ended);
  };

  const onError = () => {
    setLoading((loading) => false);
    setError((error) => true);
  };

  const onRequestList = () => {
    onListLoading();

    marvelService.getAllCharacters().then(onCharactersLoaded).catch(onError);
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
    return <ul className="character-list">{items}</ul>;
  };

  const items = renderItems(charactersList);
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
          onClick={() => onRequestList(offset)}
        />
      )}
    </div>
  );
};

export default CharacterList;

// import React from 'react';

// import CharacterCard from './CharacterCard';
// import Button from './Button';
// import MarvelService from '../services/MarvelService';
// import Spinner from './Spinner';
// import ErrorMessage from './ErrorMessage';

// import './CharacterList.scss';

// class CharacterList extends React.Component {
//   state = {
//     charactersList: [],
//     loading: true,
//     error: false,
//     newItemLoading: false,
//     offset: 3,
//     charactersEnded: false,
//   };
//   marvelService = new MarvelService();
//   itemRefs = [];

//   componentDidMount() {
//     this.onRequestList();
//   }

//   onListLoading = () => {
//     this.setState({
//       newItemLoading: true,
//     });
//   };

//   onCharactersLoaded = (newCharactersList) => {
//     let ended = false;
//     if (newCharactersList.length < this.state.offset) {
//       ended = true;
//     }

//     this.setState(({ offset, charactersList }) => ({
//       charactersList: [...charactersList, ...newCharactersList],
//       loading: false,
//       newItemLoading: false,
//       offset: offset + 3,
//       charactersEnded: ended,
//     }));
//   };

//   onError = () => {
//     this.setState({
//       loading: false,
//       error: true,
//     });
//   };

//   onRequestList = (offset) => {
//     this.onListLoading();

//     this.marvelService.getAllCharacters(offset).then(this.onCharactersLoaded).catch(this.onError);
//   };

//   setItemRef = (ref) => {
//     this.itemRefs.push(ref);
//   };

//   onFocusItem = (id) => {
//     this.itemRefs.forEach((item) => {
//       item.childNodes[0].classList.remove('active');
//     });
//     this.itemRefs[id].childNodes[0].classList.add('active');
//     this.itemRefs[id].focus();
//   };

//   renderItems(charactersList) {
//     let items = charactersList.slice(0, this.state.offset).map((item, i) => {
//       return (
//         <li
//           className="character-list__item"
//           key={item.id}
//           tabIndex={0}
//           ref={this.setItemRef}
//           onClick={() => {
//             this.props.onSelectedCharacterId(item.id);
//             this.onFocusItem(i);
//           }}
//           onKeyPress={(e) => {
//             if (e.key === ' ' || e.key === 'Enter') {
//               this.props.onSelectedCharacterId(item.id);
//               this.onFocusItem(i);
//             }
//           }}>
//           <CharacterCard name={item.name} thumbnail={item.thumbnail} />
//         </li>
//       );
//     });
//     return <ul className="character-list">{items}</ul>;
//   }

//   render() {
//     const { charactersList, loading, error, newItemLoading, offset, charactersEnded } = this.state;
//     const items = this.renderItems(charactersList);
//     const errorMessage = error ? <ErrorMessage /> : null;
//     const spinner = loading ? <Spinner /> : null;
//     const content = !(loading || error) ? items : null;

//     return (
//       <div className="col">
//         {errorMessage}
//         {spinner}
//         {content}
//         {!content ? null : (
//           <Button
//             buttonClasses={'character-list__button button--accent'}
//             buttonName="Load more"
//             disabled={newItemLoading}
//             style={{ display: charactersEnded ? 'none' : 'block' }}
//             onClick={() => this.onRequestList(offset)}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default CharacterList;
