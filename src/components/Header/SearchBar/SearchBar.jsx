import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => (
  <TextField
    className="search"
    label="Start typing country or capital"
    type="search"
    variant="outlined"
    InputProps={{
      endAdornment: (
        <InputAdornment>
          <SearchIcon color="primary" />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchBar;
