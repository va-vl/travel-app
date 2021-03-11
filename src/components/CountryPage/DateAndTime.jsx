import * as React from 'react';
import PropTypes from 'prop-types';
import { SECONDS_IN_HOUR, MS_IN_SECOND } from '../../constants/TIME_PROPS';

const DateAndTime = ({ timeZone }) => {
  const dateNow = new Date();
  const diff = (dateNow.getTimezoneOffset() / 60 + timeZone) * SECONDS_IN_HOUR;

  const [date, setDate] = React.useState('');
  const [counter, setCounter] = React.useState(dateNow.getTime() + diff * MS_IN_SECOND);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + MS_IN_SECOND);
    }, MS_IN_SECOND);

    return () => clearTimeout(timer);
  });

  React.useEffect(() => {
    setDate(new Date(counter).toLocaleString('en-GB'));
  }, [counter]);

  return (
    <div>{date}</div>
  );
};

DateAndTime.propTypes = {
  timeZone: PropTypes.number.isRequired,
};

export default DateAndTime;
