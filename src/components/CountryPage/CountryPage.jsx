import * as React from 'react';
import { Link } from 'react-router-dom';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import SightListContainer from './SightList/SightListContainer';
import { useLanguage } from '../../contexts/LanguageContext';

const CountryPage = () => {
  const { dictionary } = useLanguage();

  return (
    <main>
      <CountryInfoContainer />
      <SightListContainer />
      <Link to="/">{dictionary.GO_BACK_BUTTON}</Link>
    </main>
  );
};

export default CountryPage;
