import * as React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import ModeSwitch from './ModeSwitch/ModeSwitch';
import Login from './Login/Login';
import Register from './Register/Register';
import styles from './styles/styles';

const AuthModal = ({ open, handleClose }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const handleModeSwitch = () => { setIsLogin(!isLogin); };
  const classes = styles();

  return (
    <Dialog
      open={open}
      scroll="body"
      onClose={handleClose}
      disableBackdropClick
      disableEscapeKeyDown
      className={classes.root}
    >
      <DialogActions style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
      >
        <ModeSwitch isLogin={isLogin} handleModeSwitch={handleModeSwitch} />
        <IconButton
          onClick={handleClose}
          variant="contained"
          color="primary"
        >
          <CancelIcon />
        </IconButton>
      </DialogActions>
      <DialogContent dividers>
        {
          isLogin
            ? <Login />
            : <Register />
        }
      </DialogContent>
    </Dialog>
  );
};

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AuthModal;
