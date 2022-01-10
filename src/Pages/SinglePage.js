/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import useMarvelService from '../services/MarvelService';
import ErrorBoundary from '../Components/ErrorBoundary';
import setContent from '../utils/setContent';

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { clearError, getComic, getCharacter, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateData();
  }, [id]);

  const updateData = () => {
    clearError();
    // eslint-disable-next-line default-case
    switch (dataType) {
      case 'comic':
        getComic(id).then(onDataLoaded).then(() => {setProcess('confirmed');});
        break;
      case 'char':
        getCharacter(id).then(onDataLoaded).then(() => {setProcess('confirmed');});
        break;
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{data ? data.title || data.name : 'Marvel Single Page'}</title>
        <meta name="description" content={data ? data.description : 'Marvel Single Page'} />
      </Helmet>
      <ErrorBoundary>
        {setContent(process, Component, data)}
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default SinglePage;
