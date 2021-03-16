import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Button, TextField, Dialog, DialogActions, DialogContent,
} from '@material-ui/core';
import { useLanguage } from '../../../../../../../contexts/LanguageContext';

const FormDialog = ({ open, handleClose, handleSubmit }) => {
  const {
    dictionary: {
      MODAL_SUBMIT_BUTTON,
      MODAL_CANCEL_BUTTON,
      MODAL_NAME_LABEL,
    },
  } = useLanguage();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          id="username"
          type="text"
          label={MODAL_NAME_LABEL}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {MODAL_CANCEL_BUTTON}
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {MODAL_SUBMIT_BUTTON}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormDialog;
