import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import withRenderControl from '../../../_common/withRenderControl';

const CountryCard = ({
  id, name, capital, image,
}) => (
  <Link
    to={`/countryId=${id}`}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withRenderControl(CountryCard, {
  LoadingComponent: () => (
    <div className="card">
      <CircularProgress />
    </div>
  ),
});
