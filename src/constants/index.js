import en from './dictionaries/en';
import ru from './dictionaries/ru';
import ua from './dictionaries/ua';
import iconFlagEn from '../assets/icon-flag-en.png';
import iconFlagRu from '../assets/icon-flag-ru.png';
import iconFlagUa from '../assets/icon-flag-ua.png';
import * as links from './_links';
import * as api from './_api';
import * as timeConstants from './_timeConstants';

const dictionaryList = { en, ru, ua };
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const languageOptions = {
  en: {
    name: 'English',
    icon: iconFlagEn,
  },
  ru: {
    name: 'Русский',
    icon: iconFlagRu,
  },
  ua: {
    name: 'Украї́нська',
    icon: iconFlagUa,
  },
};

export {
  dictionaryList,
  languageOptions,
  api,
  links,
  timeConstants,
  emailRegex,
};
