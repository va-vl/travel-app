import * as React from 'react';
import { useLanguage } from '../../../utils/localStorage';
import LANGUAGES from '../../../constants/languages';

const LanguageSelect = () => {
  const [language, setLanguage] = useLanguage();

  const handleChange = ({ target: { value } }) => setLanguage(value);

  return (
    <select
      defaultValue={language}
      onChange={handleChange}
    >
      {
        LANGUAGES.map((lang) => (
          <option value={lang} key={lang}>{lang}</option>
        ))
      }
    </select>
  );
};

export default LanguageSelect;
