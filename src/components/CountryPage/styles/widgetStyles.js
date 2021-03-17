import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../styles/stylesUtils';

const styles = makeStyles({
  root: {
    width: '20%',
    minWidth: '182px',
    transform: 'translateY(calc(7.4rem + 2px))',

    ...flexColumn(),
    flexWrap: 'wrap',
    gap: '1rem',

    '& .widget': {
      padding: '1rem',
      ...flexColumn(),

      borderRadius: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, .65)',

      '&:not(:last-child)': {
        alignItems: 'center',
      },
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

    '& .invis': {
      opacity: '0',
    },

    '& .widget-loader': {
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: '0.5rem',
      backgroundColor: 'rgba(255, 255, 255, .65)',
    },

    '@media (max-width: 900px)': {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      transform: 'unset',

      '& .widget': {
        margin: '0',
        minWidth: '12.5rem',
        justifyContent: 'center',
        flexGrow: '1',

        alignItems: 'center',
      },
    },
  },
});

export default styles;
