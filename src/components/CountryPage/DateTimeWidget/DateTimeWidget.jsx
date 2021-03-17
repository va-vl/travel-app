import * as React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../contexts/LanguageContext';
import { timeConstants } from '../../../constants/index';

const {
  SECONDS_IN_HOUR,
  MS_IN_SECOND,
} = timeConstants;

export const locales = {
  en: 'en-US',
  ru: 'ru-RU',
  ua: 'uk-UA',
};

const DateTimeWidget = ({ capitalGMT }) => {
  const dateNow = new Date();
  const diff = (dateNow.getTimezoneOffset() / 60 + capitalGMT) * SECONDS_IN_HOUR;

  const [counter, setCounter] = React.useState(dateNow.getTime() + diff * MS_IN_SECOND);
  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState('');
  const [dayOfWeek, setDayOfWeek] = React.useState('');

  const { language } = useLanguage();
  const locale = locales[language];

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
    <div className="widget date-and-time">
      <p>{time}</p>
      <p>{date}</p>
      <p>{dayOfWeek}</p>
    </div>
  );
};

DateTimeWidget.propTypes = {
  capitalGMT: PropTypes.number.isRequired,
};

export default DateTimeWidget;
