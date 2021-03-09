import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withRenderControl from '../_common/withRenderControl';
import { useLanguage } from '../../contexts/LanguageContext';

const CountryPage = ({
  name, capital, description, image, sights,
}) => {
  const { dictionary } = useLanguage();

  return (
    <>
      <h3>{name}</h3>
      <h4>{capital}</h4>
      <p>{description}</p>
      <img alt={name} src={image} />
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
      <Link to="/">{dictionary.GO_BACK_BUTTON}</Link>
    </>
  );
};

CountryPage.propTypes = {
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
