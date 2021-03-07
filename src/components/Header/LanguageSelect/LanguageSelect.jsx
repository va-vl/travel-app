import * as React from 'react';
import { useLanguage, useLanguageUpdate } from '../../../contexts/LanguageContext';
import { languageOptions } from '../../../constants/index';

const LanguageSelect = () => {
  const { language } = useLanguage();
  const setLanguage = useLanguageUpdate();

  const handleChange = ({ target: { value } }) => { setLanguage(value); };

  return (
    <select
      defaultValue={language}
      onChange={handleChange}
    >
      {
        Object.entries(languageOptions).map(([lang, name]) => (
          <option value={lang} key={lang}>{name}</option>
        ))
      }
    </select>
  );
};

export default LanguageSelect;
