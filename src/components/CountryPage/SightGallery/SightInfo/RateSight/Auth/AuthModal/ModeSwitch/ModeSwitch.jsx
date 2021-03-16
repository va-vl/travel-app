import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Switch, Grid, Typography,
} from '@material-ui/core';
import { useLanguage } from '../../../../../../../../contexts/LanguageContext';

const ModeSwitch = ({ isLogin, handleModeSwitch }) => {
  const {
    dictionary: {
      MODAL_SWITCH_LOGIN,
      MODAL_SWITCH_REGISTER,
    },
  } = useLanguage();

  return (
    <Typography component="div">
      <Grid
        component="label"
        container
        alignItems="center"
        spacing={1}
      >
        <Grid item>{MODAL_SWITCH_REGISTER}</Grid>
        <Grid item>
          <Switch
            checked={isLogin}
            onChange={handleModeSwitch}
            name="mode"
          />
        </Grid>
        <Grid item>{MODAL_SWITCH_LOGIN}</Grid>
      </Grid>
    </Typography>
  );
};

ModeSwitch.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  handleModeSwitch: PropTypes.func.isRequired,
};

export default ModeSwitch;
