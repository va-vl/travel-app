import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../utils/localStorage';

const getCountrySummariesObj = (language) => fetch('/API_URL/summaries', {
  method: 'GET',
  headers: { 'Accept-Language': language },
})
  .then((res) => res.text())
  .then((text) => JSON.parse(text))
  .catch(() => null);

const MainPage = () => {
  const [language] = useLanguage();
  const [countrySummariesObj, setCountrySummariesObj] = React.useState(null);

  React.useEffect(() => {
    getCountrySummariesObj(language)
      .then(setCountrySummariesObj);
  }, [language]);

  return countrySummariesObj ? (
    <ul>
      {
        countrySummariesObj.map(({ name, capital, id }) => (
          <div key={name}>
            <h3>{name}</h3>
            <h4>{capital}</h4>
            <Link to={`/countryId=${id}`}>learn more</Link>
          </div>
        ))
      }
    </ul>
  ) : <div>Now Loading</div>;
};

export default MainPage;
