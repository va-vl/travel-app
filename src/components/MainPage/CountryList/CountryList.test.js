import * as React from 'react';
import ReactDOM from 'react-dom';
import CountryList from './CountryList';

test('component CountryList renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountryList></CountryList>, div);
});
