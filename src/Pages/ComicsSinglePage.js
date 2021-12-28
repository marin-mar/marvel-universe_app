import ErrorBoundary from '../Components/ErrorBoundary';
import Banner from '../Components/Banner';
import ComicsSingle from '../Components/ComicsSingle';

const ComicsSinglePage = () => {
	return (
    <>
      <div className="banners">
        <ErrorBoundary>
          <Banner />
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <ComicsSingle />
      </ErrorBoundary>
    </>
  );
}

export default ComicsSinglePage;