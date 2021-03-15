import * as React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles/styles';
import SightInfo from './SightInfo/SightInfo';
import withRenderControl from '../../_common/withRenderControl';

const SightGallery = ({ sights }) => {
  const [index, setIndex] = React.useState(0);
  const classes = styles();

  const images = sights.map(({ name, image }) => ({
    original: image,
    originalTitle: name,
    thumbnail: image,
    thumbnailTitle: name,
  }));

  return (
    <div className={`block ${classes.root}`}>
      <ImageGallery
        items={images}
        startIndex={index}
        onBeforeSlide={setIndex}
      />
      <SightInfo
        sights={sights}
        index={index}
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
  DefaultComponent: () => <CircularProgress />,
});
