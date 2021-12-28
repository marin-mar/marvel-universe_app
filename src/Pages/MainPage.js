import { useState } from 'react';

import ErrorBoundary from '../Components/ErrorBoundary';
import Banner from '../Components/Banner';
import CharacterList from '../Components/CharacterList';
import CharacterDescription from '../Components/CharacterDescription';
import CharacterSearch from '../Components/CharacterSearch';

const MainPage = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const onSelectedCharacterId = (id) => {
    setSelectedCharacterId((selectedCharacterId) => id);
  };

  return (
    <>
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
    </>
  );
};

export default MainPage;
