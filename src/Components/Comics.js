import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import useMarvelService from '../services/MarvelService';
import ErrorMessage from './ErrorMessage';
import Spinner from './Spinner';

import './Comics.scss';

const Comics = (props) => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();
  const itemRefs = useRef([]);

  useEffect(() => {
    onRequestList();
  }, []);

  const onRequestList = (initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics().then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < offset) {
      ended = true;
    }
    setComicsList([...comicsList, ...newComicsList]);
    setNewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 4);
    setComicsEnded((comicsEnded) => ended);
  };

  const onFocusItem = (id) => {
    itemRefs.current.forEach((item) => {
      item.classList.remove('active');
    });
    itemRefs.current[id].classList.add('active');
    itemRefs.current[id].focus();
  };

  const renderItems = (comicsList) => {
    let items = comicsList.slice(0, offset).map((item, i) => {
      return (
        <li
          className="comics__item"
          key={item.id}
          tabIndex={0}
          ref={(el) => (itemRefs.current[i] = el)}
          onClick={() => {
            onFocusItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === 'Enter') {
              onFocusItem(i);
            }
          }}>
          <Link to={`/comics/${item.id}`}>
            <img className="comics__img" src={item.thumbnail} alt={item.title} width={225} height={346} />
            <h3 className="comics__title">{item.title}</h3>
            <p className="comics__price">{item.price}</p>
          </Link>
        </li>
      );
    });

    return (
      <>
        <ul className="comics__list">{items}</ul>
      </>
    );
  };

  const content = renderItems(comicsList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="comics">
      {content}
      {errorMessage}
      {spinner}
      {content ? (
        <Button
          buttonClasses={'comics__button button--accent'}
          buttonName="Load more"
          disabled={newItemLoading}
          style={{ display: comicsEnded ? 'none' : 'block' }}
          onClick={onRequestList}
        />
      ) : null}
    </div>
  );
};

export default Comics;
