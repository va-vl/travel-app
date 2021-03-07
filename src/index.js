import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto';
import App from './components/App';
import configureFakeBackend from './fakeBackend/configureFakeBackend';

configureFakeBackend();

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
