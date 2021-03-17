import * as React from 'react';
import ReactDOM from 'react-dom';
import WeatherWidget from './WeatherWidget';

test('component WeatherWidget renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherWidget></WeatherWidget>, div);
});
