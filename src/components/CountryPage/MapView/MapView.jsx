import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  FullscreenControl,
  Source,
  Layer,
} from 'react-map-gl';
import { useParams } from 'react-router-dom';
import Pin from './Pin/Pin';
import languageLayerStyles from '../../../config/map';
import { MAPBOX_API_KEY } from '../../../config/keys';
import { useLanguage } from '../../../contexts/LanguageContext';
import { links } from '../../../constants/index';

const { geoJsonData } = links;

const MapView = ({ capitalLon, capitalLat }) => {
  const [viewport, setViewport] = React.useState({
    latitude: capitalLat,
    longitude: capitalLon,
    zoom: 5,
  });
  const { language } = useLanguage();
  const { countryId } = useParams();
  const [mapStyle, setMapStyle] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setMapStyle(languageLayerStyles[language]);
  }, [language]);

  React.useEffect(() => {
    fetch(geoJsonData[countryId])
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="50vmin"
      mapStyle={mapStyle}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_API_KEY}
    >
      <Pin
        longitude={capitalLon}
        latitude={capitalLat}
      />
      <Source type="geojson" data={data}>
        <Layer
          id="data"
          type="fill"
          paint={{
            'fill-color': 'red',
            'fill-opacity': 0.1,
          }}
        />
      </Source>
      <FullscreenControl style={{ top: '10px', left: '10px' }} />
    </ReactMapGL>
  );
};

MapView.propTypes = {
  capitalLat: PropTypes.number.isRequired,
  capitalLon: PropTypes.number.isRequired,
};

export default MapView;
