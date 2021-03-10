import * as React from 'react';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import SightGallerytContainer from './SightGalleryContainer/SightGalleryContainer';
import Widgets from './Widgets/Widgets';
import styles from './styles/styles';

const CountryPage = () => {
  const classes = styles();

  return (
    <main className={classes.root}>
      <CountryInfoContainer />
      <Widgets />
      <SightGallerytContainer />
    </main>
  );
};

export default CountryPage;
