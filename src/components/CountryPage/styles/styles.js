import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../styles/stylesUtils';

const styles = makeStyles({
  link: {
    display: 'block',
    marginBottom: '1rem',
  },

  root: {
    paddingBottom: '4rem',
    ...flexColumn(),
    alignItems: 'center',

    '& .block': {
      marginBottom: '4rem',
    },

    '& .main-content': {
      display: 'flex',
      justifyContent: 'space-between',

      '& .info': {
        width: '70%',

        '& .description': {
          marginBottom: '1rem',
        },

        '& img': {
          width: '100%',
          borderRadius: '10px',
        },
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

    '& .image-gallery-thumbnail-image': {
      borderRadius: '4px',
      cursor: 'pointer',
    },

    '& .image-gallery-thumbnail': {
      borderRadius: '5px',
    },

    '& .image-gallery-svg': {
      height: '4rem',
    },
  },
});

export default styles;
