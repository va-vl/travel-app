import * as React from 'react';
import PropTypes from 'prop-types';

const APIErrorComponent = ({ message }) => (
  <div>
    <h3>Ooops, something went wrong!</h3>
    <p>{message}</p>
  </div>
);

APIErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default APIErrorComponent;
