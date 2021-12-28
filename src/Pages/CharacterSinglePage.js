import ErrorBoundary from '../Components/ErrorBoundary';
import Banner from '../Components/Banner';
import Character from '../Components/Character';

const CharacterSinglePage = () => {
  return (
    <>
      <div className="banners">
        <ErrorBoundary>
          <Banner />
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <Character />
      </ErrorBoundary>
    </>
  );
};

export default CharacterSinglePage;
