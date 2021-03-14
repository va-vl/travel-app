import * as React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import CountryList from './CountryList';
import { useLanguage } from '../../../contexts/LanguageContext';
import { countryListInitAC, countryListUpdateAC } from '../../../store/countryListReducer/countryListActions';
import filterCountryList from './filterCountryList';

const CountryListContainer = () => {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const {
    isLoading,
    isDefault,
    isError,
    isReady,
    errorComponentProps,
  } = useSelector((state) => state.countryListReducer, shallowEqual);
  const apiData = useSelector((state) => state.countryListReducer.data, shallowEqual);
  const searchValue = useSelector((state) => state.countrySearchReducer.value);
  const data = filterCountryList(apiData, searchValue, language);
  const dataIsEqual = shallowEqual(apiData, data);

  React.useEffect(() => {
    if (isDefault) {
      dispatch(countryListInitAC(language));
    } else {
      dispatch(countryListUpdateAC(language));
    }
  }, [language]);

  return (
    <CountryList
      canBeUpdated
      errorComponentProps={errorComponentProps}
      language={language}
      isLoading={isLoading}
      isDefault={isDefault}
      isError={isError}
      isReady={isReady}
      data={dataIsEqual ? apiData : data}
    />
  );
};

export default CountryListContainer;
