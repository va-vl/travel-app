import { makeStyles } from '@material-ui/core';
import flexColumn from './stylesUtils';

const styles = makeStyles({
  root: {
    margin: '0 auto',
    padding: '2rem 40px',

    ...flexColumn(),
    maxWidth: '1280px',

    '@media (max-width: 600px)': {
      padding: '2rem 20px',
    },
  },

  main: {
    ...flexColumn('4rem'),
    minHeight: 'calc(100vh - 8rem - 4rem - 104px)',
  },

  title: {
    marginBottom: '3rem',
    padding: '1rem 0',

    display: 'inline-flex',
    fontSize: '2rem',
    borderBottom: '2px solid black',
  },

  alignLeft: {
    alignSelf: 'flex-start',
    paddingRight: '6rem',
  },

  alignRight: {
    alignSelf: 'flex-end',
    paddingLeft: '6rem',
    textAlign: 'right',
  },
});

export default styles;
