export const COUNTRY_SEARCH_UPDATE = 'COUNTRY_SEARCH_UPDATE';
export const COUNTRY_SEARCH_CLEAR = 'COUNTRY_SEARCH_CLEAR';

export const countrySearchUpdateAC = (payload) => ({
  type: COUNTRY_SEARCH_UPDATE,
  payload,
});

export const countrySearchClearAC = () => ({
  type: COUNTRY_SEARCH_CLEAR,
});
