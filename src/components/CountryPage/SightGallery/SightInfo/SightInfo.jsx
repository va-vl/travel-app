import * as React from 'react';
import PropTypes from 'prop-types';
import RateSight from './RateSight/RateSight';
// import SightRating from './SightRating/SightRating';

const SightInfo = ({ index, sights }) => {
  const { name, description } = sights[index];

  // TODO: Sight ratings
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {/* <SightRating sightId={id} /> */}
      <RateSight />
    </div>
  );
};

SightInfo.propTypes = {
  index: PropTypes.number.isRequired,
  sights: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default SightInfo;
