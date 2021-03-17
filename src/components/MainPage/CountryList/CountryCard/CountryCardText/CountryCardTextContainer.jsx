import * as React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import CountryCardText from './CountryCardText';

const CountryCardTextContainer = (props) => {
  const { isLoading, isReady } = useSelector((state) => state.countryListReducer, shallowEqual);

  return <CountryCardText isLoading={isLoading} isReady={isReady} {...props} />;
};

export default CountryCardTextContainer;
