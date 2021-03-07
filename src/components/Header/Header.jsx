import * as React from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import Logo from './Logo/Logo';
import styles from './styles/styles';

const Header = () => {
  const { pathname } = useLocation();
  const classes = styles();

  return (
    <header className={classes.root}>
      <Logo />
      {
        pathname === '/'
          ? <SearchBar />
          : null
      }
      <LanguageSelect />
    </header>
  );
};

export default Header;
