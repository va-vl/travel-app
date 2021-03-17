// attribution
// https://www.williamkurniawan.com/blog/building-a-simple-login-form-with-material-ui-and-react-hook-form

import * as React from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Grid,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { emailRegex } from '../../../../../../../../constants/index';
import { useLanguage } from '../../../../../../../../contexts/LanguageContext';
import { loginAC } from '../../../../../../../../store/loginReducer/loginReducerActions';
import AuthModalControls from '../../../../../../../_common/AuthModalControls';
import { useAuthChange } from '../../../../../../../../contexts/AuthContext';

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
      AUTH_ERROR_MESSAGE,
    },
  } = useLanguage();
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.loginReducer, shallowEqual);
  const { login } = useAuthChange();

  const onSubmit = handleSubmit((data) => {
    dispatch(loginAC(data))
      .then((tokens) => { login(tokens); });
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
        {isError && <Grid item xs={12}><div>{AUTH_ERROR_MESSAGE}</div></Grid>}
        <Grid item xs={12}>
          <AuthModalControls
            okButtonText={AUTH_BUTTON_OK}
            handleClose={handleClose}
            isLoading={isLoading}
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
