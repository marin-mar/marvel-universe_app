/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useMarvelService from '../services/MarvelService';
import ErrorBoundary from '../Components/ErrorBoundary';
import ErrorMessage from '../Components/ErrorMessage';
import Spinner from '../Components/Spinner';

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { loading, error, clearError, getComic, getCharacter } = useMarvelService();

  useEffect(() => {
    updateData();
  }, [id]);

  const updateData = () => {
    clearError();
    // eslint-disable-next-line default-case
    switch (dataType) {
      case 'comic':
        getComic(id).then(onDataLoaded);
        break;
      case 'char':
        getCharacter(id).then(onDataLoaded);
        break;
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !data) ? <Component data={data} /> : null;

  return (
    <>
      <Helmet>
        <title>{data ? data.title || data.name : 'Marvel Single Page'}</title>
        <meta name="description" content={data ? data.description : 'Marvel Single Page'} />
      </Helmet>
      <ErrorBoundary>
        {errorMessage}
        {spinner}
        {content}
      </ErrorBoundary>
    </>
  );
};

export default SinglePage;
