import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Button, IconButton, LinearProgress,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

const AuthModalControls = ({ okButtonText, handleClose, isLoading }) => (
  isLoading
    ? <LinearProgress />
    : (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={3}>
          <Button
            color="secondary"
            fullWidth
            type="submit"
            variant="contained"
          >
            {okButtonText}
          </Button>
        </Grid>
        <Grid item xs={3}>
          <IconButton
            onClick={handleClose}
            variant="contained"
            color="primary"
          >
            <CancelIcon />
          </IconButton>
        </Grid>
      </Grid>
    ));

AuthModalControls.propTypes = {
  okButtonText: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default AuthModalControls;
