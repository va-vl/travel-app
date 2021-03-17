const API_URL = 'https://travel-app-back-48.herokuapp.com';

export const LANG_URL = '?lang=';
export const BACKEND_COUNTRIES = `${API_URL}/countries`;
export const BACKEND_COUNTRY = `${API_URL}/countries/`;
export const BACKEND_USER_REGISTER = `${API_URL}/user/register`;
export const BACKEND_USER_LOGIN = `${API_URL}/user/login`;
export const BACKEND_USER_LOGOUT = `${API_URL}/user/logout`;

export const CURRENCY_API = 'https://v6.exchangerate-api.com/v6/';
export const GET_WEATHER_API = (key, city, lang) => `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=${lang}`;
