import en from './dictionaries/en';
import ru from './dictionaries/ru';
import ua from './dictionaries/ua';
import * as links from './links';
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
  links,
};
