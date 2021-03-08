import { makeStyles } from '@material-ui/core';
import STYLE_CONSTANTS from '../../../styles/STYLE_CONSTANTS';

const styles = makeStyles({
  root: {
    marginBottom: `${2 * STYLE_CONSTANTS.unit}px`,
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
