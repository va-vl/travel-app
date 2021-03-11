// attribution:
// https://javascript.plainenglish.io/authentication-in-react-caf2abfa0494
import * as React from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();
const AuthChangeContext = React.createContext();
const useAuth = () => React.useContext(AuthContext);
const useAuthChange = () => React.useContext(AuthChangeContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = React.useState(false);

  const login = (token) => {
    setAuth(!!token);
  };

  const logout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={auth}>
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
