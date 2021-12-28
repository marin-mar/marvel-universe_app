import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../Components/Header';
// import { MainPage, ComicsPage, ComicsSinglePage, CharacterSinglePage, Page404 } from '../Pages';
import Spinner from '../Components/Spinner';

import './App.scss';

const Page404 = lazy(() => import('../Pages/404'));
const MainPage = lazy(() => import('../Pages/MainPage'));
const ComicsPage = lazy(() => import('../Pages/ComicsPage'));
const ComicsSinglePage = lazy(() => import('../Pages/ComicsSinglePage'));
const CharacterSinglePage = lazy(() => import('../Pages/CharacterSinglePage'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<ComicsSinglePage />} />
            <Route path="/character-single" element={<CharacterSinglePage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
