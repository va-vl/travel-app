import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './registerReducerActions';

const initialState = {
  isReady: false,
  isLoading: false,
  isError: false,
};

const registerReducer = (state = initialState, { type }) => {
  switch (type) {
    default: {
      return state;
    }
    case REGISTER_REQUEST: {
      return {
        isReady: false,
        isLoading: true,
        isError: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        isReady: true,
        isLoading: false,
        isError: false,
      };
    }
    case REGISTER_FAILURE: {
      return {
        isReady: false,
        isLoading: false,
        isError: true,
      };
    }
  }
};

export default registerReducer;
