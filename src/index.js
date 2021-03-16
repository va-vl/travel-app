import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import '@fontsource/roboto';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

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
