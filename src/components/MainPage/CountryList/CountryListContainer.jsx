import * as React from 'react';
import CountryList from './CountryList';
import queryFakeBackend from '../../../utils/api';
import { useLanguage } from '../../../contexts/LanguageContext';
import { api } from '../../../constants/index';

const { BACKEND_SUMMARIES } = api;

const getSummaries = (language) => queryFakeBackend(
  BACKEND_SUMMARIES,
  'GET',
  { 'Accept-Language': language },
);

const CountryListContainer = () => {
  const { language } = useLanguage();
  const [isLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [data, setData] = React.useState([]);

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

  return CountryList({
    isLoading,
    isError,
    isReady,
    data,
  });
};

export default CountryListContainer;
