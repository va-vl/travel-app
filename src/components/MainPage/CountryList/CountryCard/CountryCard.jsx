import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({
  name, capital, id, image,
}) => (
  <Link
    to={`/countryId=${id}`}
    key={name}
    className="card"
    style={{
      backgroundImage: `url('${image}')`,
    }}
  >
    <h3>{name}</h3>
    <h4>{capital}</h4>
  </Link>
);

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CountryCard;
