import * as React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './styles/styles';
import { WEATHER_API_KEY } from '../../../config/keys';

const WeatherWidget = ({ capital, capitalEN }) => {
  const {
    language,
    dictionary: {
      WIND,
      HUMIDITY,
    },
  } = useLanguage();
  const classes = styles();

  const [isStatusOk, setStatus] = React.useState(false);
  const [data, setData] = React.useState({});
  const [condition, setCondition] = React.useState({});

  const city = capitalEN === 'kyiv'
    ? 'kiev'
    : capitalEN;

  const lang = language === 'ua'
    ? 'uk'
    : language;

  const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&lang=${lang}`;

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ current }) => {
        setData(current);
        setCondition(current.condition);
      }).then(() => {
        setStatus(true);
      })
      .catch(() => setStatus(false));
  }, [language]);

  if (!isStatusOk) {
    return <></>;
  }

  return (
    <div className={`widget weather ${classes.root}`}>

      <div className="weather__up">
        <div className="weather__up_text">
          <p>{capital}</p>
          <p>{`${data.temp_c} °C`}</p>
        </div>
        <img src={`https:${condition.icon}`} alt="weatherIcon" width="64" />
      </div>

      <div className="weather__down">
        <p>{`${WIND}: ${Number(data.gust_kph / 3.6).toFixed(1)} m/s`}</p>
        <p>{`${HUMIDITY}: ${data.humidity}%`}</p>
        <p>{condition.text}</p>
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  capital: PropTypes.string.isRequired,
  capitalEN: PropTypes.string.isRequired,
};

export default WeatherWidget;
