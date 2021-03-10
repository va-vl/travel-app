import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import queryFakeBackend from '../../utils/api';
import { api } from '../../constants/index';
import styles from './styles/styles';
import stylesCommon from '../../styles/common';

const { BACKEND_SUMMARIES } = api;

const getSummaries = (language) => queryFakeBackend(
  BACKEND_SUMMARIES,
  'GET',
  { 'Accept-Language': language },
);

const MainPage = () => {
  const { language, dictionary } = useLanguage();
  const [isError, setIsError] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [data, setData] = React.useState({});
  const classes = styles();
  const classesCommon = stylesCommon();

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
    const cardsArr = data.map(({
      name, capital, id, card,
    }) => (
      <Link
        to={`/countryId=${id}`}
        key={name}
        className="card"
        style={{
          backgroundImage: `url('${card}')`,
        }}
      >
        <h3>{name}</h3>
        <h4>{capital}</h4>
      </Link>
    ));

    const titleAlignRight = `${classesCommon.title} ${classesCommon.alignRight}`;

    return (
      <div className={classes.root}>
        <h2 className={titleAlignRight}>{dictionary.OUR_PROPOSALS}</h2>
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
