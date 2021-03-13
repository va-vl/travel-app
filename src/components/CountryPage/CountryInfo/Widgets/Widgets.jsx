import * as React from 'react';
import PropTypes from 'prop-types';
import DateAndTime from './DateAndTime/DateAndTime';
import Weather from './Weather/Weather';
import Currency from './Currency/Currency';
import styles from './styles/styles';

const Widgets = ({
  timeZone, capitalEn, countryCurrency,
}) => {
  const classes = styles();

  return (
    <aside className={classes.root}>
      <DateAndTime timeZone={timeZone} />
      <Weather capitalEn={capitalEn} />
      <Currency countryCurrency={countryCurrency} />
    </aside>
  );
};

Widgets.propTypes = {
  timeZone: PropTypes.number.isRequired,
  capitalEn: PropTypes.string.isRequired,
  countryCurrency: PropTypes.string.isRequired,
};

export default Widgets;
