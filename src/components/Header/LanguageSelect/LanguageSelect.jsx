import * as React from 'react';
import { Select, MenuItem } from '@material-ui/core/';
import { useLanguage, useLanguageUpdate } from '../../../contexts/LanguageContext';
import { languageOptions } from '../../../constants/index';

const LanguageSelect = () => {
  const { language } = useLanguage();
  const setLanguage = useLanguageUpdate();

  const handleChange = ({ target: { value } }) => { setLanguage(value); };

  return (
    <Select
      variant="outlined"
      autoWidth
      value={language}
      onChange={handleChange}
      MenuProps={{ disableScrollLock: true }}
    >
      {Object.entries(languageOptions).map(([lang, { icon, name }]) => (
        <MenuItem value={lang} key={lang}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={icon} alt="flag" width="15" height="15" />
            <p style={{ marginLeft: '.5rem' }}>{name}</p>
          </div>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelect;
