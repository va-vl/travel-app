import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& .search': {
      width: '100%',
      maxWidth: '600px',

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
