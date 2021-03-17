import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CountryCard from './CountryCard';
import store from '../../../../store/store';

test('component CountryCard renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryCard></CountryCard>
      </BrowserRouter>
    </Provider>
    , div);
});

test('render correctly CountryCard component', () => {
  const CountryCardComponent = TestRenderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <CountryCard /></BrowserRouter>
    </Provider>
  ).toJSON();
  expect(CountryCardComponent).toMatchSnapshot();
});
