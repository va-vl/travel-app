import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withRenderControl from '../_common/withRenderControl';
import { useLanguage } from '../../contexts/LanguageContext';

const CountryPage = ({
  name, capital, description, image,
}) => {
  const { dictionary } = useLanguage();

  return (
    <>
      <h3>{name}</h3>
      <h4>{capital}</h4>
      <p>{description}</p>
      <img alt={name} src={image} />
      <Link to="/">{dictionary.GO_BACK_BUTTON}</Link>
    </>
  );
};

CountryPage.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withRenderControl(CountryPage, {
  LoadingComponent: <div>Loading</div>,
  ErrorComponent: <div>Something Went Wrong!</div>,
  DefaultComponent: <h1>I AM A FUCKING DEFAULT</h1>,
});
