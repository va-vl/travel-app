import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './registerReducerActions';

const initialState = {
  isLoading: false,
  isReady: false,
  isError: false,
  errorMessage: null,
};

const registerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
    case REGISTER_REQUEST: {
      return {
        isLoading: true,
        isReady: false,
        isError: false,
        errorMessage: null,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        isLoading: false,
        isReady: true,
        isError: false,
        errorMessage: null,
      };
    }
    case REGISTER_FAILURE: {
      return {
        isLoading: false,
        isReady: false,
        isError: true,
        errorMessage: payload,
      };
    }
  }
};

export default registerReducer;
