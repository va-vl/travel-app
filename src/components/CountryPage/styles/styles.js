import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  link: {
    display: 'block',
    marginBottom: '1rem',
  },

  root: {
    alignItems: 'center',

    '& .block:not(:last-child)': {
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
