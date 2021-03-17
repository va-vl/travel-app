import flexColumn from './stylesUtils';

describe('flexColumn', () => {
  test('without marginBottom if there are no arguments', () => {
    const flexColumnWithMargin = flexColumn();

    expect(flexColumnWithMargin).toEqual({
      display: 'flex',
      flexDirection: 'column',
    });
  });

  test('with marginBottom', () => {
    const flexColumnWithMargin = flexColumn('4rem');

    expect(flexColumnWithMargin).toEqual({
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '4rem',
    });
  });
});
