import { makeStyles } from '@material-ui/core';
import containerColumn from '../../../styles/stylesConstants';

const styles = makeStyles({
  root: {
    ...containerColumn,

    '& .cards-container': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',

      '& .card': {
        padding: '1rem',
        width: '280px',
        height: '300px',

        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        justifyContent: 'flex-end',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '6px',
        boxShadow: '2px 2px 5px 1px rgba(0,0,0,0.71)',

        textShadow: '2px 2px 4px #000',
        color: '#fff',
        textDecoration: 'none',

        transition: '.2s',
        '&:hover': {
          transform: 'scale(1.08)',
        },
      },
    },
  },
});

export default styles;
