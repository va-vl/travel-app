import * as React from 'react';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import SightGalleryContainer from './SightGallery/SightGalleryContainer';
import Video from './Video/Video';
import styles from './styles/styles';

const CountryPage = () => {
  const classes = styles();

  return (
    <main className={classes.root}>
      <CountryInfoContainer />
      <SightGalleryContainer />
      <Video />
    </main>
  );
};

export default CountryPage;
