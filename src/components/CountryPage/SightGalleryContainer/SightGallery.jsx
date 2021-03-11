import * as React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import withRenderControl from '../../_common/withRenderControl';
import { useAuth } from '../../../contexts/AuthContext';

const SightGallery = ({ sights }) => {
  const images = sights.map(({ name, image, description }) => ({
    original: image,
    originalTitle: name,
    thumbnail: image,
    thumbnailTitle: name,
    description,
  }));
  const [name, setName] = React.useState(sights[0].name);
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <h3>{isLoggedIn ? 'logged in' : 'notLoggedIn'}</h3>
        {
          isLoggedIn
            ? <button type="button" onClick={logout}>logout</button>
            : <button type="button" onClick={login}>login</button>
        }
      </div>
      <ImageGallery
        items={images}
        className="image-gallery"
        onSlide={(index) => { setName(sights[index].name); }}
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
