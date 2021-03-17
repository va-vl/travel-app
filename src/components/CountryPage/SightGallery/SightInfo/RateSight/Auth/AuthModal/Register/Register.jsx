// attribution
// https://www.williamkurniawan.com/blog/building-a-simple-login-form-with-material-ui-and-react-hook-form

import * as React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import {
  TextField, Grid,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../../../../../../../constants/index';
import { useLanguage } from '../../../../../../../../contexts/LanguageContext';
import { registerAC } from '../../../../../../../../store/registerReducer/registerReducerActions';
import AuthModalControls from '../../../../../../../_common/AuthModalControls';
import ImageUploadInput from './ImageUploadInput/ImageUploadInput';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    errors,
  } = useForm();
  const {
    dictionary: {
      AUTH_NAME_PLACEHOLDER,
      AUTH_HELPER,
      AUTH_EMAIL_PLACEHOLDER,
      AUTH_PASSWORD_PLACEHOLDER,
      AUTH_BUTTON_OK,
      AUTH_ERROR_MESSAGE,
      AUTH_SUCCESS_MESSAGE,
      AUTH_AVATAR_BUTTON,
    },
  } = useLanguage();
  const formRef = React.useRef();
  const onSubmit = handleSubmit(() => {
    const data = new FormData(formRef.current);
    dispatch(registerAC(data));
  });
  const {
    isLoading,
    isError,
    isReady,
  } = useSelector((state) => state.registerReducer, shallowEqual);

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  minLength: 6,
                })}
                fullWidth
                error={errors.name}
                label={AUTH_NAME_PLACEHOLDER}
                helperText={errors.name && AUTH_HELPER}
                name="name"
                size="small"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  pattern: emailRegex,
                })}
                fullWidth
                error={errors.email}
                helperText={errors.email && AUTH_HELPER}
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
                inputRef={register({
                  required: true,
                  minLength: 6,
                })}
                label={AUTH_PASSWORD_PLACEHOLDER}
                name="password"
                size="small"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <ImageUploadInput buttonLabel={AUTH_AVATAR_BUTTON} />
            </Grid>
          </Grid>
        </Grid>
        {isError && <Grid item xs={12}><div>{AUTH_ERROR_MESSAGE}</div></Grid>}
        {isReady && <Grid item xs={12}><div>{AUTH_SUCCESS_MESSAGE}</div></Grid>}
        <Grid item xs={12}>
          <AuthModalControls
            isLoading={isLoading}
            handleClose={handleClose}
            okButtonText={AUTH_BUTTON_OK}
          />
        </Grid>
      </Grid>
    </form>
  );
};

Register.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Register;
