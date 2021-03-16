const API_URL = 'https://travel-app-back-48.herokuapp.com';

export const LANG_URL = '?lang=';
export const BACKEND_COUNTRIES = `${API_URL}/countries`;
export const BACKEND_COUNTRY = `${API_URL}/countries/`;
export const BACKEND_SIGHT_RATING = `${API_URL}/`;

export const CURRENCY_API = 'https://v6.exchangerate-api.com/v6/';
export const GET_WEATHER_API = (key, city, lang) => `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=${lang}`;
