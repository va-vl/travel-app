import * as React from 'react';
import { useSelector } from 'react-redux';
import CountryInfo from './CountryInfo';

const CountryInfoContainer = (props) => {
  const { isLoading, isReady } = useSelector((state) => state.countryPageReducer);

  return <CountryInfo isLoading={isLoading} isReady={isReady} {...props} />;
};

export default CountryInfoContainer;
