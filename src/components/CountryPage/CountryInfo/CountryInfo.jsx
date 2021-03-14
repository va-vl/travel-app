import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import withRenderControl from '../../_common/withRenderControl';
import stylesCommon from '../../../styles/common';
import styles from '../styles/styles';
import Widgets from './Widgets/Widgets';

const CountryInfo = ({
  name, capital, description, image, capitalEn, timeZone, countryCurrency,
}) => {
  const { dictionary: { GO_BACK_BUTTON } } = useLanguage();

  const classesCommon = stylesCommon();
  const titleAlignLeft = `${classesCommon.title} ${classesCommon.alignLeft}`;
  const classes = styles();

  return (
    <>
      <h2 className={titleAlignLeft}>
        {`${name}, ${capital}`}
      </h2>

      <div className="block main-content">
        <div className="info">
          <p className="description">{description}</p>
          <Link to="/" className={classes.link}>
            {GO_BACK_BUTTON}
          </Link>
          <img src={image} alt="" />
        </div>

        <Widgets
          capitalEn={capitalEn}
          timeZone={timeZone}
          countryCurrency={countryCurrency}
        />
      </div>
    </>
  );
};

CountryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  capitalEn: PropTypes.string.isRequired,
  timeZone: PropTypes.number.isRequired,
  countryCurrency: PropTypes.string.isRequired,
};

export default withRenderControl(CountryInfo, {
  LoadingComponent: <div>Loading</div>,
  ErrorComponent: <div>Something Went Wrong!</div>,
});
