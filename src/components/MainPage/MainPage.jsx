import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import queryFakeBackend from '../../utils/api';
import styles from './styles/styles';

const getSummaries = (language) => queryFakeBackend(
  '/API_URL/summaries',
  'GET',
  { 'Accept-Language': language },
);

const MainPage = () => {
  const { language } = useLanguage();
  const [isError, setIsError] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [data, setData] = React.useState({});
  const classes = styles();

  React.useEffect(() => {
    getSummaries(language)
      .then(({ body }) => {
        setData(body);
        setIsError(false);
        setIsReady(true);
      })
      .catch((err) => {
        setData(err.message);
        setIsReady(false);
        setIsError(true);
      });
  }, [language]);

  // TODO: create provider component instead of this garbage
  if (isReady) {
    console.log(data);
    const cardsArr = data.map(({ name, capital, id }) => (
      <Link
        to={`/countryId=${id}`}
        key={name}
        className="card"
        style={{
          backgroundImage: `url("/src/assets/images/${id}/1.png")`,
        }}
      >
        <h3>{name}</h3>
        <h4>{capital}</h4>
      </Link>
    ));

    return (
      <div className={classes.root}>
        <h2 className="title">Our proposals</h2>
        <div className="cards-container">
          {cardsArr}
        </div>
      </div>
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
