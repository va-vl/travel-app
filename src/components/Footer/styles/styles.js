import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    height: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& a': {
      transition: '.2s',
      textDecoration: 'none',
      color: '#000',
      whiteSpace: 'pre',

      '&:hover': {
        transform: 'scale(1.2)',

        '&:after': {
          content: 'attr(data-title)',
          position: 'absolute',
          top: '-1.3rem',
          left: '50%',
          transform: 'translateX(-50%)',
        },
      },
    },

    '& div': {
      display: 'flex',
      alignItems: 'flex-end',
    },

    '& .rss-logo': {
      marginRight: '0.8rem',
    },

    '& .github-logo:not(:last-child)': {
      marginRight: '0.8rem',
    },

    '@media (max-width: 400px)': {
      height: '8rem',
      flexDirection: 'column-reverse',
      justifyContent: 'space-evenly',
    },
  },
});

export default styles;
