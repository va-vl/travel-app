import * as React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import CountryPageContainer from './CountryPage/CountryPageContainer';
import Footer from './Footer/Footer';
import styleCommon from '../styles/common';

const App = () => {
  const classes = styleCommon();
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/:countryId">
          <CountryPageContainer />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
