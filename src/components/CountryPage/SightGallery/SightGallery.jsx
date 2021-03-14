import * as React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import SightInfo from './SightInfo/SightInfo';
import withRenderControl from '../../_common/withRenderControl';

const SightGallery = ({ sights }) => {
  const images = sights.map(({ name, image }) => ({
    original: image,
    originalTitle: name,
    thumbnail: image,
    thumbnailTitle: name,
  }));

  const [index, setIndex] = React.useState(0);

  return (
    <div className="block">
      <SightInfo sights={sights} index={index} />
      <ImageGallery
        className="image-gallery"
        items={images}
        startIndex={index}
        onBeforeSlide={setIndex}
      />
    </div>
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
  LoadingComponent: <div>Loading</div>,
  ErrorComponent: <div>Something Went Wrong!</div>,
});
