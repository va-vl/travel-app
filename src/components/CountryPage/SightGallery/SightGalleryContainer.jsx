import * as React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import SightGallery from './SightGallery';

const SightGalleryContainer = (props) => {
  const {
    isReady,
    isLoading,
    isDefault,
  } = useSelector((state) => state.countryPageReducer, shallowEqual);

  return (
    <SightGallery
      canBeUpdated
      isDefault={isDefault}
      isLoading={isLoading}
      isReady={isReady}
      {...props}
    />
  );
};

export default SightGalleryContainer;
