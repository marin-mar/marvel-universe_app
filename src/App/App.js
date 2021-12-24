import { useState } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import CharacterList from '../Components/CharacterList';
import CharacterDescription from '../Components/CharacterDescription';
import ErrorBoundary from '../Components/ErrorBoundary';

import './App.scss';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const onSelectedCharacterId = (id) => {
    setSelectedCharacterId((selectedCharacterId) => id);
  };

  return (
    <div className="app">
      <Header />
      <div className="banners">
        <ErrorBoundary>
          <Banner bannerCharacter />
          {/* <Banner /> */}
        </ErrorBoundary>
      </div>
      <div className="characters">
        <ErrorBoundary>
          <CharacterList onSelectedCharacterId={onSelectedCharacterId} />
        </ErrorBoundary>
        <div className="description">
          <ErrorBoundary>
            <CharacterDescription selectedCharacterId={selectedCharacterId} />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default App;
