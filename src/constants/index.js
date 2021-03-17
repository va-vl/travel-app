import en from './dictionaries/en';
import ru from './dictionaries/ru';
import ua from './dictionaries/ua';
import * as links from './_links';
import * as api from './_api';
import * as timeConstants from './_timeConstants';

const dictionaryList = { en, ru, ua };
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  timeConstants,
  emailRegex,
};
