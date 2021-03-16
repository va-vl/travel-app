import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLanguage } from '../../../contexts/LanguageContext';
import withRenderControl from '../../_common/withRenderControl';
import styles from './styles/styles';

const WeatherWidget = ({
  data: {
    capital,
    gustKph,
    humidity,
    icon,
    tempC,
    text,
  },
}) => {
  const {
    dictionary: {
      WIND,
      HUMIDITY,
    },
  } = useLanguage();
  const classes = styles();

  return (
    <div className={`widget weather ${classes.root}`}>
      <div className="weather__up">
        <div className="weather__up_text">
          <p>{capital}</p>
          <p>{`${tempC} °C`}</p>
        </div>
        <img src={`https:${icon}`} alt="weatherIcon" width="64" />
      </div>
      <div className="weather__down">
        <p>{`${WIND}: ${Number(gustKph / 3.6).toFixed(1)} m/s`}</p>
        <p>{`${HUMIDITY}: ${humidity}%`}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

WeatherWidget.propTypes = {
  data: PropTypes.shape({
    capital: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    humidity: PropTypes.number,
    gustKph: PropTypes.number,
    tempC: PropTypes.number,
  }).isRequired,
};

export default withRenderControl(WeatherWidget, {
  DefaultComponent: () => <CircularProgress />,
});
