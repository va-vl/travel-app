import { api } from '../../constants/index';

const { BACKEND_USER_LOGIN } = api;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const request = () => ({ type: REGISTER_REQUEST });
const success = (payload) => ({ type: REGISTER_SUCCESS, payload });
const failure = (payload) => ({ type: REGISTER_FAILURE, payload });

const
