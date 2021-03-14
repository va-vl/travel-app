import {
  COUNTRY_PAGE_INIT,
  COUNTRY_PAGE_UPDATE,
  COUNTRY_PAGE_READY,
  COUNTRY_PAGE_ERROR,
} from './countryPageActions';

const initialState = {
  isDefault: true,
  isLoading: false,
  isError: false,
  isReady: false,
  errorComponentProps: null,
  data: null,
};

const countryPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRY_PAGE_INIT: {
      return initialState;
    }
    case COUNTRY_PAGE_UPDATE: {
      return {
        ...state,
        isDefault: false,
        isLoading: true,
        isError: false,
        isReady: false,
      };
    }
    case COUNTRY_PAGE_READY: {
      return {
        isDefault: false,
        isLoading: false,
        isError: false,
        isReady: true,
        errorComponentProps: null,
        data: payload,
      };
    }
    case COUNTRY_PAGE_ERROR: {
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

export default countryPageReducer;
