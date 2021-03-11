import * as React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './styles/styles';
import stylesCommon from '../../styles/common';
import CountryListContainer from './CountryList/CountryListContainer';

const MainPage = () => {
  const { dictionary } = useLanguage();
  const classes = styles();
  const classesCommon = stylesCommon();
  const titleAlignRight = `${classesCommon.title} ${classesCommon.alignRight}`;

  return (
    <main className={classes.root}>
      <h2 className={titleAlignRight}>{dictionary.OUR_PROPOSALS}</h2>
      <CountryListContainer />
    </main>
  );
};

export default MainPage;
