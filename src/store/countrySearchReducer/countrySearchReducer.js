import {
  COUNTRY_SEARCH_UPDATE,
  COUNTRY_SEARCH_CLEAR,
} from './countrySearchActions';

const initialState = {
  value: '',
};

const countrySearchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case COUNTRY_SEARCH_UPDATE: {
      return {
        value: payload,
      };
    }
    case COUNTRY_SEARCH_CLEAR: {
      return initialState;
    }
  }
};

export default countrySearchReducer;
