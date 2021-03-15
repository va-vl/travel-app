import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
    <div>
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
    </div>
  );
};

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormDialog;
