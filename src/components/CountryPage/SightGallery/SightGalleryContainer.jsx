import * as React from 'react';
import { useParams } from 'react-router-dom';
import SightGallery from './SightGallery';
import queryFakeBackend from '../../../utils/api';
import { useLanguage } from '../../../contexts/LanguageContext';
import { api } from '../../../constants/index';

const { BACKEND_COUNTRY_SIGHTS } = api;

const getSights = (countryId, language) => queryFakeBackend(
  `${BACKEND_COUNTRY_SIGHTS}${countryId}`,
  'GET',
  { 'Accept-Language': language },
);

const SightGalleryContainer = () => {
  const { countryId } = useParams();
  const { language } = useLanguage();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    getSights(countryId, language)
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

  return SightGallery({
    isLoading,
    isError,
    isReady,
    ...data,
  });
};

export default SightGalleryContainer;
