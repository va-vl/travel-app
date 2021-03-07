import * as React from 'react';
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

  return (
    <FormControl variant="outlined">
      <Select
        native
        variant="outlined"
        value={language}
        onChange={handleChange}
      >
        {languagesArr}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
