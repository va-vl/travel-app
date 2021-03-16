import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import withRenderControl from '../_common/withRenderControl';
import APIErrorComponent from '../_common/APIErrorComponent';
import CountryInfo from './CountryInfo/CountryInfo';
import SightGalleryContainer from './SightGallery/SightGalleryContainer';
import WeatherWidgetContainer from './WeatherWidget/WeatherWidgetContainer';
import DateTimeWidget from './DateTimeWidget/DateTimeWidget';
import CurrencyWidgetContainer from './CurrencyWidget/CurrencyWidgetContainer';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import MapView from './MapView/MapView';
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
    capitalLat,
    capitalLon,
  },
}) => {
  const classes = styles();
  const widgetClasses = widgetStyles();

  return (
    <main className={`${classesCommon.main} ${classes.root}`}>
      <h2 className={titleAlignLeft}>
        {`${name}, ${capital}`}
      </h2>
      <div className="block main-content">
        <CountryInfo
          name={name}
          capital={capital}
          description={description}
          image={image}
        />
        <aside className={widgetClasses.root}>
          <DateTimeWidget capitalGMT={capitalGMT} />
          <CurrencyWidgetContainer countryCurrency={currency} />
          <WeatherWidgetContainer
            capital={capital}
            capitalEN={capitalEN}
          />
        </aside>
      </div>
      <SightGalleryContainer sights={sights} />
      <VideoPlayer videoUrl={videoUrl} />
      <MapView capitalLat={capitalLat} capitalLon={capitalLon} />
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
    capitalLat: PropTypes.number.isRequired,
    capitalLon: PropTypes.number.isRequired,
  }).isRequired,
};

export default withRenderControl(CountryPage, {
  ErrorComponent: APIErrorComponent,
  DefaultComponent: () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '80vh',
    }}
    >
      <CircularProgress />
    </div>
  ),
});
