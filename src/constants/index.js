import en from './dictionaries/en';
import ru from './dictionaries/ru';
import ua from './dictionaries/ua';
import * as links from './_links';
import * as api from './_api';
import * as timeConstants from './_timeConstants';

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
  timeConstants,
};
