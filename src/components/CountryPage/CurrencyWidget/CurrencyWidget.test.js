import * as React from 'react';
import ReactDOM from 'react-dom';
import CurrencyWidget from './CurrencyWidget';
import { CURRENCIES } from './CurrencyWidget';

test('component CurrencyWidget renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrencyWidget></CurrencyWidget>, div);
});

test('the currency array exists and has all necessary currencies', () => {
  expect(CURRENCIES).toBeDefined();
  expect(CURRENCIES).toContain('USD');
  expect(CURRENCIES).toContain('EUR');
  expect(CURRENCIES).toContain('RUB');
});

test('all currencies in uppercase', () => {
  CURRENCIES.forEach((cur) => {
    expect(cur).toBe(cur.toUpperCase());
  });
});
