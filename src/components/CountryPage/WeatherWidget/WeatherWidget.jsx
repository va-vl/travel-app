import * as React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './styles/styles';
import { WEATHER_API_KEY } from '../../../config/keys';

const WeatherWidget = ({ city }) => {
  const { language } = useLanguage();
  const classes = styles();

  const [status, setStatus] = React.useState();
  const [temp, setTemp] = React.useState(0);
  const [icon, setIcon] = React.useState('');
  const [wind, setWind] = React.useState(0);
  const [humidity, setHumidity] = React.useState(0);
  const [condition, setCondition] = React.useState('');

  const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`;

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
    <div className={`widget weather ${classes.root}`}>

      <div className="weather__up">
        <div className="weather__up_text">
          <p>{city}</p>
          <p>{`${temp} °C`}</p>
        </div>
        <img src={`https:${icon}`} alt="weatherIcon" width="64" />
      </div>

      <div className="weather__down">
        <p>{`Wind: ${wind} m/s`}</p>
        <p>{`Humidity: ${humidity}%`}</p>
        <p>{condition}</p>
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherWidget;
