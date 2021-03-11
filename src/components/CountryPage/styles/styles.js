import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../styles/stylesUtils';

const styles = makeStyles({
  link: {
    display: 'block',
    marginBottom: '1rem',
  },

  root: {
    ...flexColumn(),

    '& .main-content': {
      marginBottom: '3rem',
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

      '& .aside': {
        width: '20%',
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

    '& .widget': {
      ...flexColumn(),
      alignItems: 'center',

      padding: '1rem',

      borderRadius: '8px',
      backgroundColor: 'rgba(60, 60, 60, .25)',

      '& p:first-child': {
        marginBottom: '1rem',
        fontSize: '2rem',
      },
    },
  },
});

export default styles;
