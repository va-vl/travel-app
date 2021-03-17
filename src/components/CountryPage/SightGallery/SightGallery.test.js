import * as React from 'react';
import ReactDOM from 'react-dom';
import SightGallery from './SightGallery';

test('component SightGallery renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SightGallery></SightGallery>, div);
});
