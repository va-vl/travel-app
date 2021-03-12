import * as React from 'react';
import PropTypes from 'prop-types';
import ReactWeather from 'react-open-weather-widget';
import { useLanguage } from '../../../contexts/LanguageContext';

const Weather = ({ capitalEn }) => {
  const { lang } = useLanguage();

  return (
    <ReactWeather
      forecast="today"
      apikey={process.env.REACT_APP_WEATHER_API_KEY}
      type="city"
      city={capitalEn}
      lang={lang}
    />
  );
};

Weather.propTypes = {
  capitalEn: PropTypes.string.isRequired,
};

export default Weather;
