import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import CountryInfoTextContainer from './CountryInfoText/CountryInfoTextContainer';
import styles from '../styles/styles';

const CountryInfo = ({
  name,
  capital,
  description,
  image,
}) => {
  const { dictionary: { GO_BACK_BUTTON } } = useLanguage();
  const classes = styles();

  return (
    <div className="content-info">
      <CountryInfoTextContainer name={name} capital={capital} description={description} />
      <Link to="/" className={classes.link}>
        {GO_BACK_BUTTON}
      </Link>
      <img src={image} alt={name} />
    </div>
  );
};

CountryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CountryInfo;
