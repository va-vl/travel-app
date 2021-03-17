import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    marginBottom: '3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& .search': {
      width: '100%',
      maxWidth: '30rem',

      '& .searchIcon': {
        cursor: 'pointer',
        transition: '.2s',

        '&:hover': {
          transform: 'scale(1.3)',
        },
      },
    },

    '& .logo': {
      borderRadius: '50%',
    },

    '@media (max-width: 800px)': {
      flexWrap: 'wrap',

      '& .search': {
        order: '1',
        display: 'flex',
        minWidth: '100%',
      },
    },
  },
});

export default styles;
