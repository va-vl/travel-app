import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CountryCard from './CountryCard/CountryCard';
import withRenderControl from '../../_common/withRenderControl';

const CountryList = ({ data }) => (
  <div className="cards-container">
    {data.map(({
      name, capital, id, card,
    }) => <CountryCard key={id} id={id} name={name} capital={capital} image={card} />)}
  </div>
);

CountryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
};

export default withRenderControl(CountryList, {
  LoadingComponent: <div>Now loading</div>,
  ErrorComponent: (
    <div>
      <h3>Welp! Something went wrong!</h3>
      <Link to="/">go back</Link>
    </div>
  ),
});
