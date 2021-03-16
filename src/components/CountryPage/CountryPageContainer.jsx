import * as React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryPage from './CountryPage';
import { useLanguage } from '../../contexts/LanguageContext';
import { countryPageInitAC, countryPageUpdateAC } from '../../store/countryPageReducer/countryPageActions';

const CountryPageContainer = () => {
  const { language } = useLanguage();
  const { countryId } = useParams();
  const dispatch = useDispatch();
  const countryPageState = useSelector((state) => state.countryPageReducer, shallowEqual);

  React.useEffect(() => {
    if (countryPageState.isDefault) {
      dispatch(countryPageInitAC(countryId, language));
    } else {
      dispatch(countryPageUpdateAC(countryId, language));
    }
  }, [language]);

  return (
    <CountryPage {...countryPageState} />
  );
};

export default CountryPageContainer;
