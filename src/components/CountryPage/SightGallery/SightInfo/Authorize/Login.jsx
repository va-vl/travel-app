import * as React from 'react';
import { useAuthChange } from '../../../../../contexts/AuthContext';

const Authorize = () => {
  const { login } = useAuthChange();

  return (
    <div>
      <button type="button" onClick={() => login('fake-token')}>Login</button>
    </div>
  );
};

export default Authorize;
