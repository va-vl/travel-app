import { CURRENCIES } from './CurrencyWidget';

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
