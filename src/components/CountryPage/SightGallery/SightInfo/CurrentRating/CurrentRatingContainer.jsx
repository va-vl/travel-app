import * as React from 'react';
import PropTypes from 'prop-types';
import CurrentRating from './CurrentRating';
import { queryBackend } from '../../../../../utils/api';
import { api } from '../../../../../constants/index';

const { BACKEND_SIGHT_RATING } = api;
const getData = (sightId) => queryBackend(
  `${BACKEND_SIGHT_RATING}${sightId}`,
  'GET',
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

const CurrentRatingContainer = ({ sightId }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    dispatch({ type: 'INIT' });

    getData(sightId)
      .then((res) => {
        // TODO: process res into rating and usersArray
        dispatch({
          type: 'READY',
          payload: res,
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
    <CurrentRating {...state} />
  );
};

CurrentRatingContainer.defaultProps = {
  sightId: undefined,
};

CurrentRatingContainer.propTypes = {
  sightId: PropTypes.string,
};

export default React.memo(CurrentRatingContainer);
