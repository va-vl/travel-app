import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    '& .weather__up': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    '& .weather__up_text': {
      marginRight: '10px',
    },

    '& .weather__up_text, .weather__down': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },

    '& .weather__up_image': {
      display: 'flex',
    },
  },
});

export default styles;
