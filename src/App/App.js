import { useState } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import CharacterList from '../Components/CharacterList';
import CharacterDescription from '../Components/CharacterDescription';
import ErrorBoundary from '../Components/ErrorBoundary';
import CharacterSearch from '../Components/CharacterSearch';

import Comics from '../Components/Comics';
import ComicsSingle from '../Components/ComicsSingle';
import Character from '../Components/Character';

import './App.scss';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const onSelectedCharacterId = (id) => {
    setSelectedCharacterId((selectedCharacterId) => id);
  };

  return (
    <div className="app">
      <Header />
      <div className="page__characters">
        <div className="banners">
          <ErrorBoundary>
            <Banner bannerCharacter />
          </ErrorBoundary>
        </div>
        <div className="characters">
          <ErrorBoundary>
            <CharacterList onSelectedCharacterId={onSelectedCharacterId} />
          </ErrorBoundary>
          <div className="description">
            <ErrorBoundary>
              <CharacterDescription selectedCharacterId={selectedCharacterId} />
              <CharacterSearch />
            </ErrorBoundary>
          </div>
        </div>
      </div>

      {/* <div className="page__comics">
        <div className="banners">
          <ErrorBoundary>
            <Banner />
          </ErrorBoundary>
        </div>
        <ErrorBoundary>
          <Comics />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComicsSingle />
        </ErrorBoundary>
        <ErrorBoundary>
          <Character />
        </ErrorBoundary>
      </div> */}

    </div>
  );
};

export default App;
