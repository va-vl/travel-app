import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import CountryPageContainer from './CountryPage/CountryPageContainer';
import Footer from './Footer/Footer';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/countryId=:countryId">
        <CountryPageContainer />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
