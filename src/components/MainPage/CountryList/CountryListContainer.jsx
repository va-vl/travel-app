import * as React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import CountryList from './CountryList';
import { useLanguage } from '../../../contexts/LanguageContext';
import { countryListInitAC, countryListUpdateAC } from '../../../store/CountryListReducer/CountryListActions';

const CountryListContainer = () => {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const countryListState = useSelector((state) => state.countryListReducer, shallowEqual);

  React.useEffect(() => {
    if (countryListState.isDefault) {
      dispatch(countryListInitAC(language));
    } else {
      dispatch(countryListUpdateAC(language));
    }
  }, [language]);

  return <CountryList canBeUpdated {...countryListState} />;
};

export default CountryListContainer;
