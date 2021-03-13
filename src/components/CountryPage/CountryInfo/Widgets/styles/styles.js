import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../../../styles/stylesUtils';

const styles = makeStyles({
  root: {
    width: '20%',

    '& .widget': {
      ...flexColumn(),
      alignItems: 'center',
      marginBottom: '1rem',
      padding: '1rem',

      borderRadius: '8px',
      backgroundColor: 'rgba(60, 60, 60, .25)',
    },

    '& .date-and-time': {
      '& p:first-child': {
        marginBottom: '1rem',
        fontSize: '2rem',
      },
    },

    '& .currency': {
      '& p:not(:last-child)': {
        marginBottom: '0.5rem',
      },
    },

    '& .rw-box': {
      marginBottom: '1rem',
    },

    '& .rw-box-left': {
      width: '100%',

      '& .date': {
        display: 'none',
      },
    },

    '& .rw-box-right': {
      display: 'none',
    },

    '& .invis': {
      opacity: '0',
    },
  },
});

export default styles;
