import * as React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from './CountryCard';

const CountryListContainer = (props) => {
  const { isLoading, isReady } = useSelector((state) => state.countryListReducer);

  return <CountryCard isLoading={isLoading} isReady={isReady} {...props} />;
};

export default CountryListContainer;
