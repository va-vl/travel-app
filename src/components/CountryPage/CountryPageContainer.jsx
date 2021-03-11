import * as React from 'react';
import { useParams } from 'react-router-dom';
import queryFakeBackend from '../../utils/api';
import CountryPage from './CountryPage';
import { useLanguage } from '../../contexts/LanguageContext';
import { TIMEZONES } from '../../constants/TIME_PROPS';
import CAPITALS_EN from '../../constants/CAPITALS_EN';

const getCountry = (countryId, language) => queryFakeBackend(
  `/API_URL/countryId=${countryId}`,
  'GET',
  { 'Accept-Language': language },
);

const CountryPageContainer = () => {
  const { countryId } = useParams();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    getCountry(countryId, language)
      .then(({ body }) => {
        setData(body);
        setIsError(false);
        setIsLoading(false);
        setIsReady(true);
      })
      .catch((err) => {
        setData(err.message);
        setIsReady(false);
        setIsLoading(false);
        setIsError(true);
      });
  }, [language]);

  return CountryPage({
    isLoading,
    isError,
    isReady,
    countryId,
    capitalEn: CAPITALS_EN[countryId],
    timeZone: TIMEZONES[countryId],
    ...data,
  });
};

export default CountryPageContainer;
