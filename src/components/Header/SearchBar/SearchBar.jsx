import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { useLanguage } from '../../../contexts/LanguageContext';
import { countrySearchUpdateAC } from '../../../store/countrySearchReducer/countrySearchActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { dictionary: { SEARCH_PLACEHOLDER } } = useLanguage();
  const searchValue = useSelector((state) => state.countrySearchReducer.value);
  const initSearch = (event) => { dispatch(countrySearchUpdateAC(event.target.value)); };

  return (
    <TextField
      autoFocus
      onChange={initSearch}
      label={SEARCH_PLACEHOLDER}
      className="search"
      type="search"
      variant="outlined"
      value={searchValue}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <SearchIcon
              color="primary"
              className="searchIcon"
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
