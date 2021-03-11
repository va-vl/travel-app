import * as React from 'react';
import PropTypes from 'prop-types';
import RateSight from './RateSight/RateSight';

const SightInfo = ({ index, sights }) => (
  <div>
    <div>
      <h3>{sights[index].name}</h3>
      <p>{sights[index].description}</p>
    </div>
    <div>here be sight ratings</div>
    <RateSight />
  </div>
);

SightInfo.propTypes = {
  index: PropTypes.number.isRequired,
  sights: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default SightInfo;
