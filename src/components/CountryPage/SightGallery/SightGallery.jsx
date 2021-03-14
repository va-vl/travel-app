import * as React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import SightInfo from './SightInfo/SightInfo';
import withRenderControl from '../../_common/withRenderControl';

const SightGallery = ({ sights }) => {
  const [index, setIndex] = React.useState(0);

  const images = sights.map(({ name, image }) => ({
    original: image,
    originalTitle: name,
    thumbnail: image,
    thumbnailTitle: name,
  }));

  return (
    <Card className="block">
      <CardContent style={{
        display: 'flex',
      }}
      >
        <ImageGallery
          className="image-gallery"
          items={images}
          startIndex={index}
          onBeforeSlide={setIndex}
        />
        <SightInfo sights={sights} index={index} />
      </CardContent>
    </Card>
  );
};

SightGallery.propTypes = {
  sights: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default withRenderControl(SightGallery, {
  DefaultComponent: () => <CircularProgress />,
});
