import * as React from 'react';
import { useSelector } from 'react-redux';
import SightGallery from './SightGallery';

const SightGalleryContainer = (props) => {
  const {
    isReady,
    isDefault,
  } = useSelector((state) => state.countryPageReducer);

  return (
    <SightGallery
      canBeUpdated
      isDefault={isDefault}
      isReady={isReady}
      {...props}
    />
  );
};

export default SightGalleryContainer;
