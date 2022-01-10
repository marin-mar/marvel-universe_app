import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
      <Helmet>
        <title>Marvel Universe inform portal | MainPage</title>
        <meta name="description" content="Marvel Universe inform portal | MainPage" />
      </Helmet>
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
    </HelmetProvider>
  );
};

export default MainPage;
