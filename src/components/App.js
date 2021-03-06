import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import CountryPage from './CountryPage/CountryPage';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/countryId=:countryId">
        <CountryPage />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
    <footer>Here be dragons</footer>
  </div>
);

export default App;
