import {
  COUNTRY_LIST_INIT,
  COUNTRY_LIST_UPDATE,
  COUNTRY_LIST_READY,
  COUNTRY_LIST_ERROR,
} from './countryListActions';

const initialState = {
  isDefault: true,
  isLoading: false,
  isError: false,
  isReady: false,
  errorComponentProps: null,
  data: null,
};

const countryListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRY_LIST_INIT: {
      return initialState;
    }
    case COUNTRY_LIST_UPDATE: {
      return {
        ...state,
        isDefault: false,
        isLoading: true,
        isError: false,
        isReady: false,
      };
    }
    case COUNTRY_LIST_READY: {
      return {
        isDefault: false,
        isLoading: false,
        isError: false,
        isReady: true,
        errorComponentProps: null,
        data: payload,
      };
    }
    case COUNTRY_LIST_ERROR: {
      return {
        isDefault: false,
        isLoading: false,
        isError: true,
        isReady: false,
        errorComponentProps: { message: payload },
        data: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default countryListReducer;
