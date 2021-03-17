import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    '& .MuiDialog-paper': {
      width: '60vw',
      minWidth: '100px',
      maxWidth: '600px',
    },

    '& .MuiDialogContent-root': {
      display: 'flex',

    },
  },
});

export default styles;
