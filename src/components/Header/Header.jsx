import * as React from 'react';
import { useLocation } from 'react-router-dom';
import LanguageSelect from './LanguageSelect/LanguageSelect';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <p>logo</p>
      {pathname === '/' ? <p>searchBar</p> : null}
      <LanguageSelect />
    </header>
  );
};

export default Header;
