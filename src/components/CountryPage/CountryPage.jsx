import * as React from 'react';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import SightGalleryContainer from './SightGallery/SightGalleryContainer';
import Widgets from './Widgets/Widgets';
import styles from './styles/styles';

const CountryPage = () => {
  const classes = styles();

  return (
    <main className={classes.root}>
      <CountryInfoContainer />
      <Widgets />
      <SightGalleryContainer />
    </main>
  );
};

export default CountryPage;
