import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useMarvelService from '../services/MarvelService';
import ErrorBoundary from '../Components/ErrorBoundary';
import ComicsSingle from '../Components/ComicsSingle';
import ErrorMessage from '../Components/ErrorMessage';
import Spinner from '../Components/Spinner';

const ComicsSinglePage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const { loading, error, clearError, getComic } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    clearError();
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <ComicsSingle comic={comic} /> : null;

  return (
    <>
      <ErrorBoundary>
        {errorMessage}
        {spinner}
        {content}
      </ErrorBoundary>
    </>
  );
};

export default ComicsSinglePage;
