import * as React from 'react';
import PropTypes from 'prop-types';
import withRenderControl from '../../_common/withRenderControl';

const SightList = ({ sights }) => (
  <ul>
    {
    sights.map((sight) => (
      <li key={sight.name}>
        <p>{sight.name}</p>
        <p>{sight.description}</p>
        <img alt="sight" src={sight.image} />
      </li>
    ))
  }
  </ul>
);

SightList.propTypes = {
  sights: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default withRenderControl(SightList, {
  LoadingComponent: <div>Loading</div>,
  ErrorComponent: <div>Something Went Wrong!</div>,
});
