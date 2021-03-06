import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../utils/localStorage';

const getCountryObj = (countryId, language) => fetch(`/API_URL/countryId=${countryId}`, {
  method: 'GET',
  headers: { 'Accept-Language': language },
})
  .then((res) => res.text())
  .then((text) => JSON.parse(text))
  .catch(() => null);

const CountryPage = () => {
  const { countryId } = useParams();
  const [language] = useLanguage();
  const [countryObj, setCountryObj] = React.useState(null);

  React.useEffect(() => {
    getCountryObj(countryId, language)
      .then(setCountryObj);
  }, [language]);

  return (
    <>
      {countryObj ? (
        <>
          <p>Data:</p>
          <p>{countryObj.name}</p>
        </>
      ) : (
        <div>Now Loading</div>
      )}
      <Link to="/">Go back</Link>
    </>
  );
};

export default CountryPage;
