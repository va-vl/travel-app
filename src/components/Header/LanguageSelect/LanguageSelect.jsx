import * as React from 'react';
<<<<<<< HEAD
import { useLanguage, useLanguageUpdate } from '../../../contexts/LanguageContext';
import { languageOptions } from '../../../constants/index';

const LanguageSelect = () => {
  const { language } = useLanguage();
  const setLanguage = useLanguageUpdate();

  const handleChange = ({ target: { value } }) => { setLanguage(value); };
=======
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useLanguage } from '../../../utils/localStorage';
import LANGUAGES from '../../../constants/languages';

const LanguageSelect = () => {
  const [language, setLanguage] = useLanguage('en');
  const handleChange = ({ target: { value } }) => setLanguage(value);
  const languagesArr = LANGUAGES.map((lang) => (
    <option
      value={lang}
      key={lang}
    >
      {lang}
    </option>
  ));
>>>>>>> develop

  return (
    <FormControl
      variant="outlined"
      size="small"
    >
<<<<<<< HEAD
      {
        Object.entries(languageOptions).map(([lang, name]) => (
          <option value={lang} key={lang}>{name}</option>
        ))
      }
    </select>
=======
      <Select
        native
        variant="outlined"
        value={language}
        onChange={handleChange}
      >
        {languagesArr}
      </Select>
    </FormControl>
>>>>>>> develop
  );
};

export default LanguageSelect;
