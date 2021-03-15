import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../../styles/stylesUtils';

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
      ...flexColumn(),
    },
  },
});

export default styles;
