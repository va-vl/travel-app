import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import '@fontsource/roboto';
import './index.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-open-weather-widget/lib/css/ReactWeather.css';
import 'leaflet/dist/leaflet.css';

//
import configureFakeBackend from './fakeBackend/configureFakeBackend';

configureFakeBackend();
//

ReactDOM.render(
  <BrowserRouter>
    <LanguageProvider>
      <Provider store={store}>
        <AuthProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </AuthProvider>
      </Provider>
    </LanguageProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
