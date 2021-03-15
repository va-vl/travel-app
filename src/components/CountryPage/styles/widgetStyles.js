import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../styles/stylesUtils';

const styles = makeStyles({
  root: {
    width: '20%',
    minWidth: '182px',

    '& .widget': {
      ...flexColumn(),
      alignItems: 'center',
      marginBottom: '1rem',
      padding: '1rem',

      borderRadius: '0.5rem',
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

    '@media (max-width: 900px)': {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',

      '& .widget, .rw-box': {
        marginBottom: '0',
        minWidth: '12.5rem',
        flexGrow: '1',
        justifyContent: 'center',
      },

      '& .rw-box-left>h2': {
        textAlign: 'center',
      },

      '& .rw-today>div': {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
});

export default styles;
