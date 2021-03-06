import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../utils/localStorage';
import queryFakeBackend from '../../utils/api';

const getSummaries = (language) => queryFakeBackend(
  '/API_URL/summaries',
  'GET',
  { 'Accept-Language': language },
);

const MainPage = () => {
  const [language] = useLanguage();
  const [componentStatus, setComponentStatus] = React.useState('loading');
  const [backendData, setBackendData] = React.useState(null);

  React.useEffect(() => {
    getSummaries(language)
      .then(({ status, data }) => {
        setBackendData(data);
        setComponentStatus(status);
      });
  }, [language]);

  // TODO: create provider component instead of this garbage
  if (componentStatus === 'success') {
    return (
      <ul>
        {
          backendData.map(({ name, capital, id }) => (
            <div key={name}>
              <h3>{name}</h3>
              <h4>{capital}</h4>
              <Link to={`/countryId=${id}`}>learn more</Link>
            </div>
          ))
        }
      </ul>
    );
  }

  if (componentStatus === 'error') {
    return (
      <>
        <h3>Welp!</h3>
        <h4>Something went wrong:</h4>
        <p>{backendData}</p>
        <Link to="/">go back</Link>
      </>
    );
  }

  return <div>Now loading</div>;
};

export default MainPage;
