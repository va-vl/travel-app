import * as React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import withRenderControl from '../../_common/withRenderControl';

const SightGallery = ({ sights }) => {
  const images = sights.map(({ name, image, description }) => ({
    originalTitle: name,
    thumbnailTitle: name,
    original: image,
    thumbnail: image,
    description,
  }));

  return (
    <div>
      <h5>{sights.name}</h5>
      <ImageGallery
        items={images}
        className="image-gallery"
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
