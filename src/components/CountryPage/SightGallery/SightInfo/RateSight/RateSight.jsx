import * as React from 'react';
import { useAuthChange } from '../../../../../contexts/AuthContext';

const RateSight = () => {
  const { logout } = useAuthChange();

  return (
    <div>
      <h5>here be rating thingy</h5>
      <button type="button" onClick={logout}>Lot out</button>
    </div>
  );
};

export default RateSight;
