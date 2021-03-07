import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useLanguage, useLanguageUpdate } from '../../../contexts/LanguageContext';
import { languageOptions } from '../../../constants/index';

const LanguageSelect = () => {
  const { language } = useLanguage();
  const setLanguage = useLanguageUpdate();

  const handleChange = ({ target: { value } }) => { setLanguage(value); };

  return (
    <FormControl
      variant="outlined"
      size="small"
    >
      <Select
        native
        variant="outlined"
        value={language}
        onChange={handleChange}
      >
        {Object.entries(languageOptions).map(([lang, name]) => (
          <option value={lang} key={lang}>{name}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
