import * as React from 'react';
import styles from './styles/styles';

const Video = () => {
  const classes = styles();

  return (
    <div className={`block ${classes.root}`}>
      <iframe
        width="853"
        height="480"
        src="https://www.youtube.com/embed/WFRR0zC70-0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube sights"
      />
    </div>
  );
};

export default Video;
