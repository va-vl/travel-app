import * as React from 'react';
import PropTypes from 'prop-types';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import Widgets from './Widgets/Widgets1';
import SightGalleryContainer from './SightGallery/SightGalleryContainer';
import styles from './styles/styles';

const CountryPage = ({ timeZone, capitalEn, countryCurrency }) => {
  const classes = styles();

  return (
    <main className={classes.root}>
      <CountryInfoContainer />
      <Widgets
        timeZone={timeZone}
        capitalEn={capitalEn}
        countryCurrency={countryCurrency}
      />
      <SightGalleryContainer />
    </main>
  );
};

CountryPage.propTypes = {
  timeZone: PropTypes.number.isRequired,
  capitalEn: PropTypes.string.isRequired,
  countryCurrency: PropTypes.string.isRequired,
};

export default CountryPage;
