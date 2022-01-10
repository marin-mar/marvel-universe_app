import { Helmet, HelmetProvider } from 'react-helmet-async';

import ErrorBoundary from '../Components/ErrorBoundary';
import Banner from '../Components/Banner';
import Comics from '../Components/Comics';

const ComicsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Marvel Universe | ComicsPage</title>
        <meta name="description" content="Marvel Universe inform portal | ComicsPage" />
      </Helmet>
      <div className="banners">
        <ErrorBoundary>
          <Banner />
        </ErrorBoundary>
      </div>
      <ErrorBoundary>
        <Comics />
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default ComicsPage;
