import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import withRenderControl from '../_common/withRenderControl';
import APIErrorComponent from '../_common/APIErrorComponent';
import CountryInfoContainer from './CountryInfo/CountryInfoContainer';
import SightGalleryContainer from './SightGallery/SightGalleryContainer';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import DateTimeWidget from './DateTimeWidget/DateTimeWidget';
import CurrencyWidgetContainer from './CurrencyWidget/CurrencyWidgetContainer';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import styles from './styles/styles';
import widgetStyles from './styles/widgetStyles';

const CountryPage = ({
  data: {
    name,
    capital,
    description,
    sights,
    image,
    capitalEN,
    capitalGMT,
    currency,
    videoUrl,
  },
}) => {
  const classes = styles();
  const widgetClasses = widgetStyles();

  return (
    <main className={classes.root}>
      <div>
        <CountryInfoContainer
          name={name}
          capital={capital}
          description={description}
          image={image}
        />
        <aside className={widgetClasses.root}>
          <DateTimeWidget timeZone={capitalGMT} />
          <CurrencyWidgetContainer countryCurrency={currency} />
          <WeatherWidget city={capitalEN} />
        </aside>
      </div>
      <SightGalleryContainer sights={sights} />
      <VideoPlayer video={videoUrl} />
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
    capitalEN: PropTypes.string.isRequired,
    capitalGMT: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRenderControl(CountryPage, {
  ErrorComponent: APIErrorComponent,
  DefaultComponent: () => <CircularProgress />,
});
