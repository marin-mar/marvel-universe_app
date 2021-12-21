import Header from '../Components/Header';
import Banner from '../Components/Banner';
import CharacterList from '../Components/CharacterList';
import CharacterDescription from '../Components/CharacterDescription';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="banners">
        {/* <Banner /> */}
        <Banner bannerCharacter />
      </div>
      <div className="characters">
        <CharacterList />
        <div className="description">
          <CharacterDescription />
        </div>
      </div>
    </div>
  );
}

export default App;
