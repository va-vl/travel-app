import * as React from 'react';
import PropTypes from 'prop-types';
import DateAndTime from './DateAndTime';
import Weather from './Weather';
import Currency from './Currency';
import styles from './styles/styles';

const Widgets = ({
  timeZone, capitalEn, language, countryCurrency,
}) => {
  const classes = styles();

  return (
    <aside className={classes.root}>
      <DateAndTime timeZone={timeZone} />
      <Weather
        capitalEn={capitalEn}
        language={language}
      />
      <Currency countryCurrency={countryCurrency} />
    </aside>
  );
};

Widgets.propTypes = {
  timeZone: PropTypes.number.isRequired,
  capitalEn: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  countryCurrency: PropTypes.string.isRequired,
};

export default Widgets;
