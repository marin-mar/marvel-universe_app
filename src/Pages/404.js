import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Page404Img from '../Img/404.svg';

const Page404 = () => {
  return (
    <HelmetProvider>
      <div className="col">
        <Helmet>
          <title>Marvel Universe inform portal | 404Page</title>
          <meta name="description" content="Marvel Universe inform portal | 404Page" />
        </Helmet>
        <img src={Page404Img} alt="Page404Img" width={250} height={250} style={{ marginTop: '1.5rem' }} />
        <h2 style={{ marginTop: '1.5rem' }}>Such Page doesn't exist</h2>
        <Link
          to="/"
          style={{
            marginTop: '1.5rem',
            padding: '0.5rem',
            textDecoration: 'none',
            color: '#9f0013',
            border: '1px solid #9f0013',
          }}>
          Go back to Main Page
        </Link>
      </div>
    </HelmetProvider>
  );
};
export default Page404;
