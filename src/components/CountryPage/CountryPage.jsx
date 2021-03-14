import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import withRenderControl from '../_common/withRenderControl';
import APIErrorComponent from '../_common/APIErrorComponent';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import SightGalleryContainer from './SightGallery/SightGalleryContainer';
import Videoplayer from './Videoplayer/Videoplayer';
import styles from './styles/styles';

const CountryPage = ({
  data: {
    name,
    capital,
    description,
    sights,
    image,
  },
  capitalEN,
  capitalGMT,
  currency,
}) => {
  const classes = styles();

  return (
    <main className={classes.root}>
      <CountryInfoContainer
        name={name}
        capital={capital}
        description={description}
        image={image}
        capitalEN={capitalEN}
        capitalGMT={capitalGMT}
        currency={currency}
      />
      <SightGalleryContainer sights={sights} />
      <Videoplayer />
    </main>
  );
};

CountryPage.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    capital: PropTypes.string,
    description: PropTypes.string,
    sights: PropTypes.instanceOf(Array),
    image: PropTypes.string,
  }).isRequired,
  capitalEN: PropTypes.string.isRequired,
  capitalGMT: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default withRenderControl(CountryPage, {
  ErrorComponent: APIErrorComponent,
  DefaultComponent: () => <CircularProgress />,
});
