import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dialog, DialogActions, DialogContent,
} from '@material-ui/core';

const CurrentRatingModal = ({
  data,
  isVisible,
  handleClose,
}) => (
  <Dialog open={isVisible}>
    <DialogContent>
      {String(data)}
    </DialogContent>
    <DialogActions>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClose}
      >
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

CurrentRatingModal.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CurrentRatingModal;
