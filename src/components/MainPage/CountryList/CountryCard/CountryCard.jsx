import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CountryCardTextContainer from './CountryCardText/CountryCardTextContainer';

const CountryCard = ({
  id, name, capital, image,
}) => (
  <Link
    to={`/${id}`}
    className="card"
    style={{
      backgroundImage: `url('${image}')`,
    }}
  >
    <CountryCardTextContainer name={name} capital={capital} />
  </Link>
);

CountryCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CountryCard;
