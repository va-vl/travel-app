import * as React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton, Dialog, DialogActions, DialogContent,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import ModeSwitch from './ModeSwitch/ModeSwitch';
import Login from './Login/Login';
import Register from './Register/Register';

const AuthModal = ({ open, handleClose }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const handleModeSwitch = () => { setIsLogin(!isLogin); };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogActions>
        <ModeSwitch isLogin={isLogin} handleModeSwitch={handleModeSwitch} />
        <IconButton
          onClick={handleClose}
          variant="contained"
          color="primary"
        >
          <CancelIcon />
        </IconButton>
      </DialogActions>
      <DialogContent>
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
