import * as React from 'react';
import PropTypes from 'prop-types';
import ReactWeather from 'react-open-weather-widget';
import { useLanguage } from '../../../contexts/LanguageContext';

const WeatherWidget = ({ city }) => {
  const { language } = useLanguage();

  return (
    <ReactWeather
      forecast="today"
      type="city"
      city={city}
      lang={language === 'ua' ? 'uk' : language}
      key={language}
      apikey={process.env.REACT_APP_WEATHER_API_KEY}
    />
  );
};

WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherWidget;
