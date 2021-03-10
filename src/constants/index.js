import en from './languages/en';
import ru from './languages/ru';
import ua from './languages/ua';
import * as api from './api';

const dictionaryList = { en, ru, ua };

const languageOptions = {
  en: 'English',
  ru: 'Русский',
  ua: 'Украї́нська',
};

export {
  dictionaryList,
  languageOptions,
  api,
};
