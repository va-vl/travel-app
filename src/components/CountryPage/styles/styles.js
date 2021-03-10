import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../styles/stylesUtils';

const styles = makeStyles({
  link: {
    display: 'block',
    marginBottom: '1rem',
  },

  root: {
    ...flexColumn(),

    '& .main-content': {
      display: 'flex',
      justifyContent: 'space-between',

      '& .info': {
        width: '70%',

        '& .description': {
          marginBottom: '1rem',
        },

        '& img': {
          width: '100%',
          borderRadius: '10px',
        },
      },

      '& .aside': {
        width: '20%',
      },
    },
  },
});

export default styles;
