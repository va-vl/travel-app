import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/styles';

const Video = ({ videoUrl }) => {
  const classes = styles();
  console.log(videoUrl);

  return (
    <div className={`block ${classes.root}`}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube sights"
      />
    </div>
  );
};

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default Video;
