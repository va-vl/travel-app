import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    marginBottom: '2rem',
    paddingTop: '2rem',
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
  },
});

export default styles;
