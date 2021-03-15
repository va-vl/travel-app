import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  FullscreenControl,
  Marker,
} from 'react-map-gl';
import languageLayerStyles from '../../../config/map';
import { MAPBOX_API_KEY } from '../../../config/keys';
import { useLanguage } from '../../../contexts/LanguageContext';
import icon from '../../../assets/capital-location-icon.svg';

const MapView = ({ capitalLon, capitalLat }) => {
  const [viewport, setViewport] = React.useState({
    latitude: capitalLat,
    longitude: capitalLon,
    zoom: 5,
  });
  const { language } = useLanguage();
  const [style, setStyle] = React.useState(null);

  React.useEffect(() => {
    setStyle(languageLayerStyles[language]);
  }, [language]);

  return (
    <ReactMapGL
      {...viewport}
      width="50vw"
      height="50vh"
      mapStyle={style}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_API_KEY}
    >
      <Marker longitude={capitalLon} latitude={capitalLat}>
        <img src={icon} width="50" height="50" alt="Country, Capital" />
      </Marker>

      <FullscreenControl style={{ top: '10px', left: '10px' }} />
    </ReactMapGL>
  );
};

MapView.propTypes = {
  capitalLat: PropTypes.number.isRequired,
  capitalLon: PropTypes.number.isRequired,
};

export default MapView;
