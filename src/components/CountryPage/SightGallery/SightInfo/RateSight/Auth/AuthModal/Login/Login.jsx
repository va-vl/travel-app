// attribution
// https://www.williamkurniawan.com/blog/building-a-simple-login-form-with-material-ui-and-react-hook-form

import * as React from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Grid,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../../../../../../../constants/index';
import { useLanguage } from '../../../../../../../../contexts/LanguageContext';
import AuthModalControls from '../../../../../../../_common/AuthModalControls';

const Login = ({ handleClose }) => {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const {
    dictionary: {
      AUTH_EMAIL_PLACEHOLDER,
      AUTH_PASSWORD_PLACEHOLDER,
      AUTH_BUTTON_OK,
    },
  } = useLanguage();
  const onSubmit = handleSubmit((data) => {

  });

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  pattern: emailRegex,
                })}
                fullWidth
                error={errors.email}
                label={AUTH_EMAIL_PLACEHOLDER}
                name="email"
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={errors.password}
                inputRef={register({ required: true })}
                label={AUTH_PASSWORD_PLACEHOLDER}
                name="password"
                size="small"
                type="password"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AuthModalControls
            okButtonText={AUTH_BUTTON_OK}
            handleClose={handleClose}
          />
        </Grid>
      </Grid>
    </form>
  );
};

Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Login;
