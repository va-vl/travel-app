// attribution:
// https://dev.to/halilcanozcelik/create-a-multi-language-website-with-react-context-api-4i27
// https://www.youtube.com/watch?v=5LrDIWkK_Bc

import * as React from 'react';
import PropTypes from 'prop-types';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';
import { dictionaryList } from '../constants/index';

const LanguageContext = React.createContext();
const LanguageUpdateContext = React.createContext();
const useLanguage = () => React.useContext(LanguageContext);
const useLanguageUpdate = () => React.useContext(LanguageUpdateContext);

const LanguageProvider = ({ children }) => {
  const defaultLanguage = getLocalStorageItem('language', 'en');
  const [language, setLanguage] = React.useState({
    language: defaultLanguage,
    dictionary: dictionaryList[defaultLanguage],
  });

  const changeLanguage = (selected) => {
    setLocalStorageItem('language', selected);
    setLanguage({
      language: selected,
      dictionary: dictionaryList[selected],
    });
  };

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={changeLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  LanguageContext,
  LanguageProvider,
  useLanguage,
  useLanguageUpdate,
};
