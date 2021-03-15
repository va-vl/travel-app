import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../../styles/stylesUtils';

const styles = makeStyles({
  root: {
    width: '100%',
    ...flexColumn(),
    justifyContent: 'flex-start',

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

    '& .image-gallery-thumbnails-container': {
      margin: '0 auto',
      maxWidth: '600px',
      display: 'flex',
      flex: '1 1 0',
    },

    '& .image-gallery-thumbnail': {
      width: 'unset',
      height: 'auto',
      borderRadius: '5px',
    },

    '& .image-gallery-thumbnail-image': {
      borderRadius: '4px',
      cursor: 'pointer',
    },

    '& .image-gallery-svg': {
      height: '4rem',
    },

    '& .image-gallery-image': {
      maxHeight: '600px !important',
    },
  },
});

export default styles;
