import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withRenderControl from '../_common/withRenderControl';
import { useLanguage } from '../../contexts/LanguageContext';
import stylesCommon from '../../styles/common';
import styles from './styles/styles';
import { align } from '../../styles/stylesUtils';

const CountryPage = ({
  countryId, name, capital, description, image, sights,
}) => {
  const { dictionary } = useLanguage();
  const classesCommon = stylesCommon();
  const classes = styles();

  const goBack = (
    <Link
      to="/"
      className={classes.link}
    >
      {dictionary.GO_BACK_BUTTON}
    </Link>
  );

  return (
    <div className={classes.root}>
      <h2
        className={classesCommon.title}
        style={{ ...align('left') }}
      >
        {`${name}, ${capital}`}
      </h2>

      <div className="main-content">

        <div className="info">
          <p className="description">{description}</p>
          {goBack}
          <img src={`../../assets/images/${countryId}/1.png`} alt="" />
        </div>

        <aside className="aside">
          <div>widget1</div>
          <div>widget2</div>
          <div>widget3</div>
        </aside>

      </div>

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

    </div>
  );
};

CountryPage.propTypes = {
  countryId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sights: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default withRenderControl(CountryPage, {
  LoadingComponent: <div>Loading</div>,
  ErrorComponent: <div>Something Went Wrong!</div>,
  DefaultComponent: <h1>I AM A FUCKING DEFAULT</h1>,
});
