// attribution
// https://www.williamkurniawan.com/blog/building-a-simple-login-form-with-material-ui-and-react-hook-form

import * as React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { emailRegex } from '../../../../../../../../constants/index';
import { useLanguage } from '../../../../../../../../contexts/LanguageContext';

const Login = () => {
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
  const onSubmit = handleSubmit((data) => { console.log(data); });

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
          <Button color="secondary" fullWidth type="submit" variant="contained">
            {AUTH_BUTTON_OK}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
