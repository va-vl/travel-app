import locales from './DateTimeWidget';

const localesArr = Object.values(locales);

test('all locales exist and contain dash', () => {
  localesArr.forEach((loc) => {
    expect(loc).toBeDefined();
    expect(loc).toContain('-');
  });
});
