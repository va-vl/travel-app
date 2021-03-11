import * as React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  SECONDS_IN_HOUR,
  MS_IN_SECOND,
} from '../../constants/TIME_PROPS';

const DateAndTime = ({ timeZone }) => {
  const dateNow = new Date();
  const diff = (dateNow.getTimezoneOffset() / 60 + timeZone) * SECONDS_IN_HOUR;

  const [counter, setCounter] = React.useState(dateNow.getTime() + diff * MS_IN_SECOND);
  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState('');
  const [dayOfWeek, setDayOfWeek] = React.useState('');

  const { language } = useLanguage();
  const locale = language === 'en'
    ? 'en-US'
    : 'ru-RU';

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + MS_IN_SECOND);
    }, MS_IN_SECOND);

    return () => clearTimeout(timer);
  });

  React.useEffect(() => {
    const localDate = new Date(counter);
    setTime(localDate.toLocaleString(locale, { timeStyle: 'medium' }));
    setDate(localDate.toLocaleString(locale, { dateStyle: 'long' }));
    setDayOfWeek(localDate.toLocaleString(locale, { weekday: 'long' }));
  }, [counter]);

  return (
    <div className="widget">
      <p>{time}</p>
      <p>{date}</p>
      <p>{dayOfWeek}</p>
    </div>
  );
};

DateAndTime.propTypes = {
  timeZone: PropTypes.number.isRequired,
};

export default DateAndTime;
