import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useLanguage } from '../../contexts/LanguageContext';
import { countryPageClearAC } from '../../store/countryPageReducer/countryPageActions';
import styles from './styles/styles';
import stylesCommon from '../../styles/common';
import CountryListContainer from './CountryList/CountryListContainer';

const MainPage = () => {
  const dispatch = useDispatch();
  const { dictionary } = useLanguage();
  const classes = styles();
  const classesCommon = stylesCommon();
  const titleAlignRight = `${classesCommon.title} ${classesCommon.alignRight}`;

  React.useEffect(() => {
    dispatch(countryPageClearAC());
  }, []);

  return (
    <main className={classes.root}>
      <h2 className={titleAlignRight}>{dictionary.OUR_PROPOSALS}</h2>
      <CountryListContainer />
    </main>
  );
};

export default MainPage;
