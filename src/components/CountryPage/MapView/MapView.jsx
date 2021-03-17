import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  FullscreenControl,
  NavigationControl,
  Source,
  Layer,
} from 'react-map-gl';
import { useParams } from 'react-router-dom';
import Pin from './Pin/Pin';
import { MAPBOX_API_KEY } from '../../../config/keys';
import { useLanguage } from '../../../contexts/LanguageContext';
import { links } from '../../../constants/index';
import styles from './styles/styles';

const { geoJsonData, localizedMapStyles } = links;
const countryPaint = {
  'fill-color': 'red',
  'fill-opacity': 0.1,
};
const MAPBOX_CONTAINER_WIDTH = '100%';
const MAPBOX_CONTAINER_HEIGHT = '50vh';

const MapView = ({ capitalLon, capitalLat }) => {
  const [viewport, setViewport] = React.useState({
    latitude: capitalLat,
    longitude: capitalLon,
    zoom: 3,
  });
  const { language } = useLanguage();
  const { countryId } = useParams();
  const [mapStyle, setMapStyle] = React.useState(null);
  const [data, setData] = React.useState(null);
  const classes = styles();

  React.useEffect(() => {
    setMapStyle(localizedMapStyles[language]);
  }, [language]);

  React.useEffect(() => {
    fetch(geoJsonData[countryId])
      .then((res) => res.json())
      .then((json) => { setData(json); });
  }, []);

  React.useEffect(() => {
    setViewport({
      ...viewport,
      latitude: capitalLat,
      longitude: capitalLon,
    });
  }, [capitalLon, capitalLat]);

  return (
    <ReactMapGL
      {...viewport}
      width={MAPBOX_CONTAINER_WIDTH}
      height={MAPBOX_CONTAINER_HEIGHT}
      mapStyle={mapStyle}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_API_KEY}
      className={classes.root}
    >
      <Pin
        longitude={capitalLon}
        latitude={capitalLat}
      />
      <Source type="geojson" data={data}>
        <Layer
          id="data"
          type="fill"
          paint={countryPaint}
        />
      </Source>
      <div className={classes['controls-wrapper']}>
        <FullscreenControl />
        <NavigationControl showCompass={false} />
      </div>
    </ReactMapGL>
  );
};

MapView.propTypes = {
  capitalLat: PropTypes.number.isRequired,
  capitalLon: PropTypes.number.isRequired,
};

export default MapView;
