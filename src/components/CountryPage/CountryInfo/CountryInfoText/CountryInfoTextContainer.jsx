import * as React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import CountryInfoText from './CountryInfoText';

const CountryInfoTextContainer = (props) => {
  const { isLoading, isReady } = useSelector((state) => state.countryPageReducer, shallowEqual);

  return <CountryInfoText isLoading={isLoading} isReady={isReady} {...props} />;
};

export default CountryInfoTextContainer;
