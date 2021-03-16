// attribution:
// https://javascript.plainenglish.io/authentication-in-react-caf2abfa0494
import * as React from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext();
const AuthChangeContext = React.createContext();
const useAuth = () => React.useContext(AuthContext);
const useAuthChange = () => React.useContext(AuthChangeContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);

  const login = (incomingToken) => {
    setToken(incomingToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={!!token}>
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
