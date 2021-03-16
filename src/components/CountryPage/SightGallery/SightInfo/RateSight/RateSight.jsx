import * as React from 'react';
import GiveRating from './GiveRating/GiveRating';
import Auth from './Auth/Auth';
import { useAuth, useAuthChange } from '../../../../../contexts/AuthContext';

const RateSight = () => {
  const isAuth = useAuth();
  const { login, logout } = useAuthChange();

  return (
    <div>
      {
        isAuth
          ? <GiveRating logout={logout} />
          : <Auth login={login} />
      }
    </div>
  );
};

export default RateSight;
