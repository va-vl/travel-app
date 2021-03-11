import * as React from 'react';
import GiveRating from './GiveRating/GiveRating';
import Authorize from './Authorize/Authorize';
import { useAuth, useAuthChange } from '../../../../../contexts/AuthContext';

const RateSight = () => {
  const isAuth = useAuth();
  const { login, logout } = useAuthChange();

  return (
    <div>
      {
        isAuth
          ? <GiveRating logout={logout} />
          : <Authorize login={login} />
      }
    </div>
  );
};

export default RateSight;
