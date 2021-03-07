import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import queryFakeBackend from '../../utils/api';

const getSummaries = (language) => queryFakeBackend(
  '/API_URL/summaries',
  'GET',
  { 'Accept-Language': language },
);

const MainPage = () => {
  const { language, dictionary } = useLanguage();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [data, setData] = React.useState({});

  console.log(isLoading);

  React.useEffect(() => {
    getSummaries(language)
      .then(({ body }) => {
        setData(body);
        setIsError(false);
        setIsLoading(false);
        setIsReady(true);
      })
      .catch((err) => {
        setData(err.message);
        setIsLoading(false);
        setIsReady(false);
        setIsError(true);
      });
  }, [language]);

  // TODO: create provider component instead of this garbage
  if (isReady) {
    return (
      <ul>
        {
          data.map(({ name, capital, id }) => (
            <div key={name}>
              <h3>{name}</h3>
              <h4>{capital}</h4>
              <Link to={`/countryId=${id}`}>{dictionary.LEARN_MORE_BUTTON}</Link>
            </div>
          ))
        }
      </ul>
    );
  }

  if (isError) {
    return (
      <>
        <h3>Welp!</h3>
        <h4>Something went wrong:</h4>
        <p>{data}</p>
        <Link to="/">go back</Link>
      </>
    );
  }

  return <div>Now loading</div>;
};

export default MainPage;
