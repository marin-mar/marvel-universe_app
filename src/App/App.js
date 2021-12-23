import { Component } from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import CharacterList from '../Components/CharacterList';
import CharacterDescription from '../Components/CharacterDescription';
import ErrorBoundary from '../Components/ErrorBoundary';

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
          <ErrorBoundary>
            <Banner bannerCharacter />
            {/* <Banner /> */}
          </ErrorBoundary>
        </div>
        <div className="characters">
          <ErrorBoundary>
            <CharacterList onSelectedCharacterId={this.onSelectedCharacterId} />
          </ErrorBoundary>
          <div className="description">
            <ErrorBoundary>
              <CharacterDescription selectedCharacterId={this.state.selectedCharacterId} />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
