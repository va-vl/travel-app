import * as React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../../../contexts/AuthContext';
import Authorize from './Authorize/Login';
import RateSight from './RateSight/RateSight';

const SightInfo = ({ index, sights }) => {
  const isAuth = useAuth();

  return (
    <div>
      <div>
        <h3>{sights[index].name}</h3>
        <p>{sights[index].description}</p>
      </div>
      <div>
        {isAuth ? <RateSight /> : <Authorize />}
      </div>
    </div>
  );
};

SightInfo.propTypes = {
  index: PropTypes.number.isRequired,
  sights: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default SightInfo;
