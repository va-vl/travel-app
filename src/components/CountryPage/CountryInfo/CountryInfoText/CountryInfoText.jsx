import * as React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import stylesCommon from '../../../../styles/common';
import withRenderControl from '../../../_common/withRenderControl';

const CountryInfoText = ({ name, capital, description }) => {
  const classesCommon = stylesCommon();
  const titleAlignLeft = `${classesCommon.title} ${classesCommon.alignLeft}`;

  return (
    <>
      <h2 className={titleAlignLeft}>
        {`${name}, ${capital}`}
      </h2>
      <p className="description">{description}</p>
    </>
  );
};

CountryInfoText.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withRenderControl(CountryInfoText, {
  LoadingComponent: () => (
    <div className="country-info-loader">
      <CircularProgress />
    </div>
  ),
});
