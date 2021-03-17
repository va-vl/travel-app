import { api } from '../../constants/index';

const { BACKEND_USER_REGISTER } = api;

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

const request = () => ({ type: REGISTER_REQUEST });
const success = () => ({ type: REGISTER_SUCCESS });
const failure = (payload) => ({ type: REGISTER_FAILURE, payload });

const sendData = (body) => fetch(BACKEND_USER_REGISTER, {
  method: 'POST',
  body,
});

export const registerAC = (user) => (dispatch) => {
  dispatch(request());

  sendData(user)
    .then((res) => {
      if (res.ok === false) {
        dispatch(failure(res.status));
      } else {
        dispatch(success());
      }
    })
    .catch((err) => {
      dispatch(failure(err.message));
    });
};
