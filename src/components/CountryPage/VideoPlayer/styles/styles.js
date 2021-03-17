import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    margin: 'auto',
    paddingBottom: 'min(480px, 56.25%)', // resolution 16:9

    position: 'relative',
    overflow: 'hidden',

    maxWidth: '853px',
    width: '100%',
    height: '0',

    '& iframe': {
      position: 'absolute',
      left: '0',
      top: '0',

      width: '100%',
      height: '100%',
    },
  },
});

export default styles;
