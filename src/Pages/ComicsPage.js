import ErrorBoundary from '../Components/ErrorBoundary';
import Banner from '../Components/Banner';
import Comics from '../Components/Comics';

const ComicsPage = () => {
  return (
    <>
      <div className="banners">
        <ErrorBoundary>
          <Banner />
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <Comics />
      </ErrorBoundary>
    </>
  );
};

export default ComicsPage;
