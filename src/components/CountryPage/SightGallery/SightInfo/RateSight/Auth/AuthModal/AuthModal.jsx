import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
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
      <DialogActions className="auth-actions">
        <ModeSwitch isLogin={isLogin} handleModeSwitch={handleModeSwitch} />
      </DialogActions>
      <DialogContent dividers>
        {
          isLogin
            ? <Login handleClose={handleClose} />
            : <Register handleClose={handleClose} />
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
