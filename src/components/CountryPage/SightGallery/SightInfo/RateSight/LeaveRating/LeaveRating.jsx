import * as React from 'react';
import { Rating } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { useLanguage } from '../../../../../../contexts/LanguageContext';
import { useAuthChange, useAuth } from '../../../../../../contexts/AuthContext';
import { api } from '../../../../../../constants/index';
import UserProfileDisplay from './UserProfileDisplay/UserProfileDisplay';

const { BACKEND_USER_ACCOUNT } = api;

const LeaveRating = () => {
  const [userAccount, setUserAccount] = React.useState(null);
  const [isRated, setIsRated] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const { dictionary: { LOG_OUT, PROFILE } } = useLanguage();
  const { logout } = useAuthChange();
  const { authToken } = useAuth();

  React.useEffect(() => {
    if (authToken) {
      fetch(BACKEND_USER_ACCOUNT, {
        method: 'GET',
        headers: { authToken },
      })
        .then((res) => res.json())
        .then((json) => { setUserAccount(json); });
    }
  }, [authToken]);

  return (
    <div>
      <Rating
        disabled={isRated}
        value={value}
        onChange={(_, newValue) => {
          setIsRated(true);
          setValue(newValue);
        }}
      />
      {
        userAccount ? (
          <UserProfileDisplay {...userAccount} label={PROFILE} />
        ) : null
      }
      <Button
        variant="contained"
        color="primary"
        onClick={logout}
      >
        {LOG_OUT}
      </Button>
    </div>
  );
};

export default LeaveRating;
