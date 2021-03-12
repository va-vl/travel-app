import * as React from 'react';
import { useParams } from 'react-router-dom';
import queryFakeBackend from '../../../utils/api';
import CountryInfo from './CountryInfo';
import { useLanguage } from '../../../contexts/LanguageContext';
import { api } from '../../../constants/index';
import { TIMEZONES } from '../../../constants/TIME_PROPS';
import CAPITALS_EN from '../../../constants/CAPITALS_EN';
import CURRENCIES from '../../../constants/CURRENCIES';

const { BACKEND_COUNTRY_INFO } = api;
const getCountry = (countryId, language) => queryFakeBackend(
  `${BACKEND_COUNTRY_INFO}${countryId}`,
  'GET',
  { 'Accept-Language': language },
);

const CountryInfoContainer = () => {
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

  return CountryInfo({
    isLoading,
    isError,
    isReady,
    countryId,
    capitalEn: CAPITALS_EN[countryId],
    timeZone: TIMEZONES[countryId],
    countryCurrency: CURRENCIES[countryId],
    ...data,
  });
};

export default CountryInfoContainer;
