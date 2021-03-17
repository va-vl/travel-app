import { queryBackend } from '../../utils/api';
import { api } from '../../constants/index';

const {
  BACKEND_COUNTRY,
  LANG_URL,
} = api;

const getData = (countryId, language) => queryBackend(
  `${BACKEND_COUNTRY}${countryId}${LANG_URL}${language}`,
  'GET',
);

export const COUNTRY_PAGE_INIT = 'COUNTRY_PAGE_INIT';
export const COUNTRY_PAGE_UPDATE = 'COUNTRY_PAGE_UPDATE';
export const COUNTRY_PAGE_READY = 'COUNTRY_PAGE_READY';
export const COUNTRY_PAGE_ERROR = 'COUNTRY_PAGE_ERROR';

const initAC = () => ({ type: COUNTRY_PAGE_INIT });
const updateAC = () => ({ type: COUNTRY_PAGE_UPDATE });
const readyAC = (payload) => ({ type: COUNTRY_PAGE_READY, payload });
const errorAC = (payload) => ({ type: COUNTRY_PAGE_ERROR, payload });

export const countryPageInitAC = (countryId, language) => (dispatch) => {
  dispatch(initAC());

  getData(countryId, language)
    .then((res) => {
      if (res === null) {
        throw new Error('Country not found!');
      }

      dispatch(readyAC(res));
    })
    .catch((err) => {
      dispatch(errorAC(err.message));
    });
};

export const countryPageUpdateAC = (countryId, language) => (dispatch) => {
  dispatch(updateAC());

  getData(countryId, language)
    .then((res) => { dispatch(readyAC(res)); })
    .catch((err) => { dispatch(errorAC(err.message)); });
};

export const countryPageClearAC = () => ({ type: COUNTRY_PAGE_INIT });
