import { makeStyles } from '@material-ui/core';

const styleHeader = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& .search': {
      width: '100%',
      maxWidth: '600px',
    },
  },

});

export default styleHeader;
