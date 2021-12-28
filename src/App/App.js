import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../Components/Header';
import { MainPage, ComicsPage, ComicsSinglePage, CharacterSinglePage, Page404 } from '../Pages';

import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics-single" element={<ComicsSinglePage />} />
          <Route path="/character-single" element={<CharacterSinglePage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
