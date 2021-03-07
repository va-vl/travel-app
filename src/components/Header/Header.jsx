import * as React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import styleHeader from '../../styles/header';

const Header = () => {
  const { pathname } = useLocation();
  const classes = styleHeader();

  return (
    <header className={classes.root}>
      <p>logo</p>
      {pathname === '/'
        ? <SearchBar />
        : null}
      <LanguageSelect />
    </header>
  );
};

export default Header;
