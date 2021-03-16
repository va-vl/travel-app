import * as React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';
import withRenderControl from '../../../../_common/withRenderControl';

const CountryCardText = ({ name, capital }) => (
  <>
    <h3>{name}</h3>
    <h4>{capital}</h4>
  </>
);

CountryCardText.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

export default withRenderControl(CountryCardText, {
  LoadingComponent: () => <div><LinearProgress /></div>,
});
