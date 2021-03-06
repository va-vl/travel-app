// localStorage hooks are based on https://usehooks.com/useLocalStorage/

import { useState } from 'react';
import LANGUAGES from '../constants/languages';

function getLocalStorageItem(key, defaultValue) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.log(err);
    return defaultValue;
  }
}

function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => getLocalStorageItem(key, defaultValue));

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function useLanguage() {
  return useLocalStorage('language', LANGUAGES[0]);
}

export {
  getLocalStorageItem,
  useLocalStorage,
  useLanguage,
};
