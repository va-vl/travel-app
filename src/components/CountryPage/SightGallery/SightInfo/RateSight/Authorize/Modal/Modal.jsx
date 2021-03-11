import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = ({ open, handleClose, handleSubmit }) => (
  <div>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Authorize</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id="username"
          label="Your name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.bool.isRequired,
};

export default FormDialog;
