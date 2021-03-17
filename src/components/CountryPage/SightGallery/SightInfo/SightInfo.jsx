import * as React from 'react';
import PropTypes from 'prop-types';
// import CurrentRatingContainer from './CurrentRating/CurrentRatingContainer';
import RateSight from './RateSight/RateSight';

const SightInfo = ({ index, sights }) => {
  const {
    // id,
    name,
    description,
  } = sights[index];

  return (
    <div className="sights-info">
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {/* <CurrentRatingContainer sightId={id} /> */}
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
