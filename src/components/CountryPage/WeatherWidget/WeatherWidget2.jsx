import * as React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './styles/styles';

const WeatherWidget2 = ({ city }) => {
  const { language } = useLanguage();
  const classes = styles();

  const [status, setStatus] = React.useState();
  const [temp, setTemp] = React.useState(0);
  const [icon, setIcon] = React.useState('');
  const [wind, setWind] = React.useState(0);
  const [humidity, setHumidity] = React.useState(0);
  const [condition, setCondition] = React.useState('');

  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY2}&q=${city}`;

  React.useEffect(() => {
    fetch(url)
      .then((response) => {
        setStatus(response.status);
        return response.json();
      })
      .then(({ current }) => {
        setTemp(current.temp_c);
        setIcon(current.condition.icon);
        setWind(Number(current.gust_kph / 3.6).toFixed(1));
        setHumidity(current.humidity);
        setCondition(current.condition.text);
      });
  }, [language]);

  if (status === 400 || status === 401 || status === 501) {
    return <div>Impossible to get weather data</div>;
  }

  return (
    <div className={`widget ${classes.root}`}>

      <div className="weather__up">
        <div className="weather__up_text">
          <span className="location2">
            {city}
          </span>
          <span className="weather">
            {`${temp} °C`}
          </span>
        </div>
        <div className="weather__up_image">
          <img src={`https:${icon}`} alt="weatherIconPath" width="50" height="50" />
        </div>
      </div>

      <div className="weather__down">
        <span className="windAndHumidity">
          {`Wind: ${wind} m/s, humidity: ${humidity}%`}
        </span>
        <span className="condition">
          {condition}
        </span>
      </div>

    </div>
  );
};

WeatherWidget2.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherWidget2;
