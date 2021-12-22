import { Component } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import CharacterList from '../Components/CharacterList';
import CharacterDescription from '../Components/CharacterDescription';

import './App.scss';

class App extends Component {
  state = {
    selectedCharacterId: null,
  };

  onSelectedCharacterId = (id) => {
    this.setState({
      selectedCharacterId: id,
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="banners">
          <Banner bannerCharacter />
        </div>
        <div className="characters">
          <CharacterList onSelectedCharacterId={this.onSelectedCharacterId} />
          <div className="description">
            <CharacterDescription selectedCharacterId={this.state.selectedCharacterId} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
