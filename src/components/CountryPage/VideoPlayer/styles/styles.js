import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    paddingBottom: 'min(480px, 56.25%)', // resolution 16:9
    position: 'relative',
    overflow: 'hidden',

    width: '100%',
    height: '0',
    textAlign: 'center',

    '&~iframe': {
      position: 'absolute',
      left: '0',
      top: '0',

      width: '100%',
      height: '100%',
    },
  },
});

export default styles;
