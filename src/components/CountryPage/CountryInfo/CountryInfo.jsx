import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import withRenderControl from '../../_common/withRenderControl';
import stylesCommon from '../../../styles/common';
import styles from '../styles/styles';

const CountryInfo = ({
  name,
  capital,
  description,
  image,
}) => {
  const { dictionary: { GO_BACK_BUTTON } } = useLanguage();
  const classesCommon = stylesCommon();
  const classes = styles();
  const titleAlignLeft = `${classesCommon.title} ${classesCommon.alignLeft}`;

  return (
    <div className="content-info">
      <h2 className={titleAlignLeft}>
        {`${name}, ${capital}`}
      </h2>
      <p className="description">{description}</p>
      <Link to="/" className={classes.link}>
        {GO_BACK_BUTTON}
      </Link>
      <img src={image} alt={name} />
    </div>
  );
};

CountryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withRenderControl(CountryInfo, {
  LoadingComponent: () => <CircularProgress />,
  ErrorComponent: () => <div>Something Went Wrong!</div>,
});
