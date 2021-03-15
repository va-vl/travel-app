import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    width: '100%',

    '& .sights-info': {
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(140, 140, 140, .6)',

      '& h3, p': {
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
      },
    },

    '& .image-gallery': {
      '& *': {
        outline: 'none',
      },
    },

    '& .image-gallery-fullscreen-button, & .image-gallery-play-button': {
      bottom: 'unset',
      top: '0',
    },

    '& .image-gallery-description': {
      bottom: '0',
    },

    '& .image-gallery-thumbnail': {
      width: '74px',
      borderRadius: '5px',
    },

    '& .image-gallery-thumbnail-image': {
      borderRadius: '2px',
      cursor: 'pointer',
    },

    '& .image-gallery-svg': {
      height: '4rem',
    },
  },
});

export default styles;
