import * as React from 'react';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import SightGalleryContainer from './SightGallery/SightGalleryContainer';
import Videoplayer from './Videoplayer/Videoplayer';
import styles from './styles/styles';

const CountryPage = () => {
  const classes = styles();

  return (
    <main className={classes.root}>
      <CountryInfoContainer />
      <SightGalleryContainer />
      <Videoplayer />
    </main>
  );
};

export default CountryPage;
