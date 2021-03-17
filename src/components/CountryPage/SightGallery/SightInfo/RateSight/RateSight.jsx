import * as React from 'react';
import LeaveRating from './LeaveRating/LeaveRating';
import Auth from './Auth/Auth';
import { useAuth } from '../../../../../contexts/AuthContext';

const RateSight = () => {
  const isAuth = useAuth();

  return (
    <div>
      {
        isAuth
          ? <LeaveRating />
          : <Auth />
      }
    </div>
  );
};

export default RateSight;
