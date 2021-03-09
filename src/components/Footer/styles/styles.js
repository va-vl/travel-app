import { makeStyles } from '@material-ui/core';
import STYLE_CONSTANTS from '../../../styles/STYLE_CONSTANTS';

const styles = makeStyles({
  root: {
    height: `${4 * STYLE_CONSTANTS.unit}px`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& a': {
      transition: '.2s',
      textDecoration: 'none',
      color: '#000',
      whiteSpace: 'pre',

      '&:hover': {
        transform: 'scale(1.2)',

        '&:after': {
          content: 'attr(data-title)',
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
    },

    '& div': {
      display: 'flex',
      alignItems: 'flex-end',
    },

    '& .rss-logo': {
      marginRight: `${0.8 * STYLE_CONSTANTS.unit}px`,
    },

    '& .github-logo': {
      marginRight: `${0.8 * STYLE_CONSTANTS.unit}px`,

      '&:last-child': {
        marginRight: '0',
      },
    },
  },
});

export default styles;
