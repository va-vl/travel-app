import { makeStyles } from '@material-ui/core';
import flexColumn from '../../../styles/stylesUtils';

const styles = makeStyles({
  link: {
    display: 'block',
    marginBottom: '1rem',
  },

  root: {
    paddingBottom: '4rem',
    ...flexColumn(),
    alignItems: 'center',

    '& .block': {
      marginBottom: '5rem',
    },

    '& .main-content': {
      display: 'flex',
      justifyContent: 'space-between',

      '& .content-info': {
        width: '70%',

        '& .description': {
          marginBottom: '1rem',
          textAlign: 'justify',
        },

        '& img': {
          width: '100%',
          borderRadius: '0.5rem',
        },
      },
    },

    '& .country-info-loader': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: '30vh',
    },

    '@media (max-width: 900px)': {
      '& .main-content': {
        flexDirection: 'column',
      },

      '& .content-info': {
        marginBottom: '2rem',
        width: '100%',
        minWidth: '100%',
      },
    },
  },
});

export default styles;
