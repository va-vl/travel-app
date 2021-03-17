// attribution:
// https://javascript.plainenglish.io/authentication-in-react-caf2abfa0494
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from '../utils/localStorage';
import { timeConstants, api } from '../constants/index';

const { MS_IN_HOUR } = timeConstants;
const { BACKEND_USER_LOGOUT } = api;

const AuthContext = React.createContext();
const AuthChangeContext = React.createContext();
const useAuth = () => React.useContext(AuthContext);
const useAuthChange = () => React.useContext(AuthChangeContext);

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = React.useState(null);
  const [refreshToken, setRefreshToken] = React.useState(null);

  const login = ({
    authToken: newAuthToken = null,
    refreshToken: newRefreshToken = null,
  } = {}) => {
    if (!newAuthToken || !newRefreshToken) {
      return;
    }

    const expirationTimestamp = Date.now() + MS_IN_HOUR;

    setAuthToken(newAuthToken);
    setRefreshToken(newRefreshToken);
    setLocalStorageItem('authToken', newAuthToken);
    setLocalStorageItem('refreshToken', newRefreshToken);
    setLocalStorageItem('expirationTimestamp', expirationTimestamp);
  };

  const logout = () => {
    setAuthToken(null);
    setRefreshToken(null);

    removeLocalStorageItem('authToken');
    removeLocalStorageItem('refreshToken');
    removeLocalStorageItem('expirationTimestamp');

    fetch(BACKEND_USER_LOGOUT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(refreshToken),
    });
  };

  React.useEffect(() => {
    const currentToken = getLocalStorageItem('authToken', null);
    const currentRefreshToken = getLocalStorageItem('refreshToken', null);
    const currentExpirationTimestamp = getLocalStorageItem('expirationTimestamp', null);
    const isTokenExpired = Date.now() >= currentExpirationTimestamp;

    if (isTokenExpired) {
      removeLocalStorageItem('authToken');
      removeLocalStorageItem('refreshToken');
    } else {
      setAuthToken(currentToken);
      setRefreshToken(currentRefreshToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth: !!authToken }}>
      <AuthChangeContext.Provider value={{ login, logout }}>
        {children}
      </AuthChangeContext.Provider>
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  AuthContext,
  AuthProvider,
  useAuth,
  useAuthChange,
};
