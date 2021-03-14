import { queryBackend } from '../../utils/api';
import { api } from '../../constants/index';

const {
  BACKEND_COUNTRIES,
  LANG_URL,
} = api;

const getData = (language) => queryBackend(
  `${BACKEND_COUNTRIES}${LANG_URL}${language}`,
  'GET',
);

export const COUNTRY_LIST_INIT = 'COUNTRY_LIST_INIT';
export const COUNTRY_LIST_UPDATE = 'COUNTRY_LIST_UPDATE';
export const COUNTRY_LIST_READY = 'COUNTRY_LIST_READY';
export const COUNTRY_LIST_ERROR = 'COUNTRY_LIST_ERROR';

const initAC = () => ({ type: COUNTRY_LIST_INIT });
const updateAC = () => ({ type: COUNTRY_LIST_UPDATE });
const readyAC = (payload) => ({ type: COUNTRY_LIST_READY, payload });
const errorAC = (payload) => ({ type: COUNTRY_LIST_ERROR, payload });

export const countryListInitAC = (language) => (dispatch) => {
  dispatch(initAC());

  getData(language)
    .then((res) => { dispatch(readyAC(res)); })
    .catch((err) => { dispatch(errorAC(err.message)); });
};

export const countryListUpdateAC = (language) => (dispatch) => {
  dispatch(updateAC());

  getData(language)
    .then((res) => { dispatch(readyAC(res)); })
    .catch((err) => { dispatch(errorAC(err.message)); });
};
