import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer';

test('component VideoPlayer renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoPlayer videoUrl="https://testUrl.com"></VideoPlayer>, div);
});

test('render correctly VideoPlayer component', () => {
  const VideoPlayerComponent = TestRenderer.create(<VideoPlayer videoUrl="https://testUrl.com" />).toJSON();
  expect(VideoPlayerComponent).toMatchSnapshot();
});
