import * as React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  FullscreenControl,
  Marker,
  Source,
  Layer,
} from 'react-map-gl';
import { useParams } from 'react-router-dom';
import languageLayerStyles from '../../../config/map';
import { MAPBOX_API_KEY } from '../../../config/keys';
import { useLanguage } from '../../../contexts/LanguageContext';
import { links } from '../../../constants/index';
import icon from '../../../assets/capital-location-icon.svg';

const { geoJsonData } = links;

const MapView = ({ capitalLon, capitalLat }) => {
  const [viewport, setViewport] = React.useState({
    latitude: capitalLat,
    longitude: capitalLon,
    zoom: 5,
  });
  const { language } = useLanguage();
  const { countryId } = useParams();
  const [style, setStyle] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(geoJsonData[countryId])
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  React.useEffect(() => {
    setStyle(languageLayerStyles[language]);
  }, [language]);

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
      width="50vw"
      height="50vh"
      mapStyle={style}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_API_KEY}
    >
      <Marker
        longitude={capitalLon}
        latitude={capitalLat}
        offsetTop={-50}
        offsetLeft={-25}
      >
        <img src={icon} width="50" height="50" alt="Capital Marker" />
      </Marker>
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
