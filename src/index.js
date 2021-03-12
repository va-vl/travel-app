import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import '@fontsource/roboto';
import './index.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-open-weather-widget/lib/css/ReactWeather.css';
import configureFakeBackend from './fakeBackend/configureFakeBackend';

configureFakeBackend();

ReactDOM.render(
  <BrowserRouter>
    <LanguageProvider>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </LanguageProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
