import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/styles';

const VideoPlayer = ({ videoUrl }) => {
  const classes = styles();

  return (
    <div className={`block ${classes.root}`}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube-nocookie.com/embed/${videoUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoPlayer;
