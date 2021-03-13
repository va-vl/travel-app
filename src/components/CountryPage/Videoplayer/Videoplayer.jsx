import * as React from 'react';
import { useParams } from 'react-router-dom';
import Video from './Video';
import queryFakeBackend from '../../../utils/api';
import { useLanguage } from '../../../contexts/LanguageContext';
import { api } from '../../../constants/index';

const { BACKEND_VIDEO_URL } = api;

const getVideoUrl = (countryId, language) => queryFakeBackend(
  `${BACKEND_VIDEO_URL}${countryId}`,
  'GET',
  { 'Accept-Language': language },
);

const Videoplayer = () => {
  const { countryId } = useParams();
  const { language } = useLanguage();

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    getVideoUrl(countryId, language)
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

  return Video({
    isLoading,
    isError,
    isReady,
    language,
    ...data,
  });
};

export default Videoplayer;
