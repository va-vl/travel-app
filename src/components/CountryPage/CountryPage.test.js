import * as React from 'react';
import ReactDOM from 'react-dom';
import CountryPage from './CountryPage';

test('component CountryPage renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountryPage></CountryPage>, div);
});
