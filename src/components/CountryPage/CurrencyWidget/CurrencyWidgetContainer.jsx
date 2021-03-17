import * as React from 'react';
import PropTypes from 'prop-types';
import CurrencyWidget from './CurrencyWidget';
import { queryExternalAPI } from '../../../utils/api';
import { api } from '../../../constants/index';
import { CURRENCY_CONVERTER_API_KEY } from '../../../config/keys';

const { CURRENCY_API } = api;
const getData = (currency) => queryExternalAPI(
  `${CURRENCY_API}${CURRENCY_CONVERTER_API_KEY}/latest/${currency}`,
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
        isReady: false,
      };
    }
  }
};

const CurrencyWidgetContainer = ({ countryCurrency }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: 'INIT' });

    getData(countryCurrency)
      .then((res) => {
        dispatch({
          type: 'READY',
          payload: res.conversion_rates,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'ERROR',
          payload: err.message,
        });
      });
  }, []);

  return (
    <CurrencyWidget
      canBeUpdated
      {...state}
      countryCurrency={countryCurrency}
    />
  );
};

CurrencyWidgetContainer.propTypes = {
  countryCurrency: PropTypes.string.isRequired,
};

export default CurrencyWidgetContainer;
