import * as React from 'react';
import PropTypes from 'prop-types';
import ReactWeather from 'react-open-weather-widget';

const Weather = ({ capitalEn, language }) => (
  <ReactWeather
    forecast="today"
    apikey={process.env.REACT_APP_WEATHER_API_KEY}
    type="city"
    city={capitalEn}
    lang={language}
  />
);

Weather.propTypes = {
  capitalEn: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Weather;
