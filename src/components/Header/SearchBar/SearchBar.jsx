import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useLanguage } from '../../../contexts/LanguageContext';

const SearchBar = () => {
  const {
    dictionary: {
      SEARCH_PLACEHOLDER,
    },
  } = useLanguage();

  const startSearch = () => {
    // console.log('it works!');
  };

  return (
    <TextField
      className="search"
      label={SEARCH_PLACEHOLDER}
      type="search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <SearchIcon
              color="primary"
              onClick={startSearch}
              className="searchIcon"
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
