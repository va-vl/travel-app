import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../utils/localStorage';
import queryFakeBackend from '../../utils/api';

const getCountry = (countryId, language) => queryFakeBackend(
  `/API_URL/countryId=${countryId}`,
  'GET',
  { 'Accept-Language': language },
);

const CountryPage = () => {
  const { countryId } = useParams();
  const [language] = useLanguage();
  const [componentStatus, setComponentStatus] = React.useState('loading');
  const [backendData, setBackendData] = React.useState(null);

  React.useEffect(() => {
    getCountry(countryId, language)
      .then(({ status, data }) => {
        setBackendData(data);
        setComponentStatus(status);
      });
  }, [language]);

  // TODO: create provider component instead of this garbage
  if (componentStatus === 'success') {
    const { name, capital, description } = backendData;
    return (
      <>
        <h3>{name}</h3>
        <h4>{capital}</h4>
        <p>{description}</p>
        <Link to="/">go back</Link>
      </>
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

export default CountryPage;
