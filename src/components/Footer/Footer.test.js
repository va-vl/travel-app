import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Footer from './Footer';

test('component Footer renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer></Footer>, div);
});

test('render correctly Footer component', () => {
  const FooterComponent = TestRenderer.create(<Footer />).toJSON();
  expect(FooterComponent).toMatchSnapshot();
});
