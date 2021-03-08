import { makeStyles } from '@material-ui/core';
import STYLE_CONSTANTS from '../../../styles/STYLE_CONSTANTS';

const styles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: `${4 * STYLE_CONSTANTS.unit}px`,

    '& .title': {
      marginBottom: `${4 * STYLE_CONSTANTS.unit}px`,
      padding: `${STYLE_CONSTANTS.unit}px 0`,

      position: 'relative',
      textAlign: 'right',
      fontSize: '48px',
      fontWeight: '400',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        right: '0',

        width: '400px',
        height: '3px',

        backgroundColor: '#000',
      },
    },

    '& .cards-container': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: `${STYLE_CONSTANTS.unit}px`,

      '& .card': {
        padding: `${STYLE_CONSTANTS.unit}px`,
        width: '280px',
        height: '300px',

        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        justifyContent: 'flex-end',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: `${STYLE_CONSTANTS.unit / 4}px`,
        boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.71)',

        textShadow: '2px 2px 4px #000',
        color: '#fff',
        textDecoration: 'none',

        '& h3, h4': {
          fontWeight: '500',
        },

        transition: '.2s',
        '&:hover': {
          transform: 'scale(1.08)',
        },
      },
    },
  },
});

export default styles;
