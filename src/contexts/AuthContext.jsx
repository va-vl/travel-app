// attribution:
// https://javascript.plainenglish.io/authentication-in-react-caf2abfa0494

import * as React from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
});
const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const login = () => { setLoggedIn(true); };
  const logout = () => { setLoggedIn(false); };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
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
};
