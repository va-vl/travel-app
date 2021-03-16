import * as React from 'react';
import PropTypes from 'prop-types';
import WeatherWidget from './WeatherWidget';
import { useLanguage } from '../../../contexts/LanguageContext';
import { queryExternalAPI } from '../../../utils/api';
import { api } from '../../../constants/index';
import { WEATHER_API_KEY } from '../../../config/keys';

const { GET_WEATHER_API } = api;
const getData = (city, lang) => queryExternalAPI(
  GET_WEATHER_API(WEATHER_API_KEY, city, lang),
);

const initialState = {
  data: null,
  errorComponentProps: null,
  isDefault: true,
  isError: false,
  isReady: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case 'INIT': {
      return initialState;
    }
    case 'READY': {
      return {
        data: payload,
        errorComponentProps: null,
        isLoading: false,
        isError: false,
        isReady: true,
      };
    }
    case 'ERROR': {
      return {
        data: null,
        errorComponentProps: payload,
        isLoading: false,
        isError: true,
        isReady: true,
      };
    }
  }
};

const WeatherWidgetContainer = ({ capital, capitalEN }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { language } = useLanguage();

  const city = capitalEN === 'kyiv'
    ? 'kiev'
    : capitalEN;

  const lang = language === 'ua'
    ? 'uk'
    : language;

  React.useEffect(() => {
    dispatch({ type: 'INIT' });

    getData(city, lang)
      .then((res) => {
        const {
          current: {
            gust_kph: gustKph,
            temp_c: tempC,
            humidity,
            condition: {
              icon,
              text,
            },
          },
        } = res;

        dispatch({
          type: 'READY',
          payload: {
            gustKph,
            tempC,
            humidity,
            icon,
            text,
            capital,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ERROR',
          payload: err.message,
        });
      });
  }, [capital]);

  return (
    <WeatherWidget
      canBeUpdated
      {...state}
    />
  );
};

WeatherWidgetContainer.propTypes = {
  capital: PropTypes.string.isRequired,
  capitalEN: PropTypes.string.isRequired,
};

export default WeatherWidgetContainer;
